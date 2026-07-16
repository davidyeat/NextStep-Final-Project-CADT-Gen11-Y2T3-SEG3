import * as authRepo from "../repositories/authRepository.js"
import errorHandler from "../middlewares/errorMiddleware.js"
import { hashPassword, comparePassword } from "../utils/password.js";
import { generateAccessToken } from "../utils/jwt.js";
import { cookieOptions } from "../utils/cookie.js";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const toSafeUser = (user) => ({
    userId: user.userId,
    username: user.username,
    email: user.email,
    roleId: user.roleId,
    role: user.Role ? {
        roleId: user.Role.roleId,
        roleName: user.Role.roleName
    } : undefined
});

const validateCredentials = ({ email, password, username }, requireUsername = false) => {
    if (requireUsername && (!username || !username.trim())) {
        return "Username is required.";
    }

    if (!email || !emailPattern.test(email.trim())) {
        return "Please enter a valid email address.";
    }

    if (!password || password.length < 6) {
        return "Password must be at least 6 characters long.";
    }

    return null;
};

/**
 * Register a new user
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export async function register(req, res) {
    try{
        const { username, email, password } = req.body;
        const validationError = validateCredentials({ username, email, password }, true);
        if (validationError) {
            return res.status(400).json({ message: validationError });
        }

        const roleId = 2; // Default role ID for new users
        const normalizedEmail = email.trim().toLowerCase();

        const existingUser = await authRepo.findUserByEmail(normalizedEmail);

        if(existingUser) {
            return res.status(400).json({ message: "User with this email already exists." });
        }

        const hashedPassword = await hashPassword(password);
        const newUser = await authRepo.createUser({
            username: username.trim(),
            email: normalizedEmail,
            password: hashedPassword,
            roleId
        });

        const token = generateAccessToken({
            userId: newUser.userId,
            username: newUser.username,
            roleId: newUser.roleId
        });

        res.cookie('accessToken', token, cookieOptions);
        res.status(201).json({ message: "User created and logged in successfully.", user: toSafeUser(newUser) });
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
        const validationError = validateCredentials({ email, password });
        if (validationError) {
            return res.status(400).json({ message: validationError });
        }

        const user = await authRepo.findUserByEmail(email.trim().toLowerCase());
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
        res.status(200).json({ message: "Login successful.", user: toSafeUser(user) });
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
