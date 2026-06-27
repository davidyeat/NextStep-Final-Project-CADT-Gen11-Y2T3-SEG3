import * as authRepo from "../repositories/authRepository.js"
import errorHandler from "../middlewares/errorMiddleware.js"
import { hashPassword, comparePassword } from "../utils/password.js";
import { generateAccessToken } from "../utils/jwt.js";
import { cookieOptions } from "../utils/cookie.js";

/**
 * Register a new user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export async function register(req, res) {
    try{
        const { username, email, password } = req.body;
        const roleId = 2; // Default role ID for new users
        const hashedPassword = await hashPassword(password);

        const existingUser = await authRepo.findUserByEmail(email);

        if(existingUser) {
            return res.status(400).json({ message: "User with this email already exists." });
        }

        const newUser = await authRepo.createUser({
            username, 
            email,
            password: hashedPassword,
            roleId
        });
        res.status(201).json({ message: "User created successfully.", user: newUser });
    } catch(err){
        errorHandler(err, req, res);
    }
}

/**
 * Login a user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export async function login(req, res) {
    try{
        const { email, password } = req.body;

        const user = await authRepo.findUserByEmail(email);
        if(!user){
            return res.status(401).json({ message: "Invalid email or password." });
        }

        const isValidPassword = await comparePassword(password, user.password);
        if(!isValidPassword){
            return res.status(401).json({ message: "Invalid email or password." });
        }

        // Generate JWT token
        const token = generateAccessToken({
            userId: user.userId,
            username: user.username,
            roleId: user.roleId
        })

        // Set the token in a cookie
        res.cookie('accessToken', token, cookieOptions);
        res.status(200).json({ message: "Login successful.", user });
    } catch(err){
        errorHandler(err, req, res);
    }
}

/**
 * Logout a user
 * @param {*} req 
 * @param {*} res 
 * @returns
 */
export async function logout(req, res) {
    try {
        // Clear the access token cookie
        res.clearCookie('accessToken', cookieOptions);
        res.status(200).json({ message: "Logout successful." });
    } catch(err){
        errorHandler(err, req, res);
    }
}