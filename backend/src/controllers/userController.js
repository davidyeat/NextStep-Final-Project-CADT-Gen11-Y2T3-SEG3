import * as userRepo from "../repositories/userRepository.js";
import errorHandler from "../middlewares/errorMiddleware.js";
import { cookieOptions } from "../utils/cookie.js";

// GET /api/users/:id
export const getUserById = async (req, res) => {
    try {
        const user = await userRepo.getUserById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }
        res.status(200).json(user);
    } catch (err) {
        errorHandler(err, req, res);
    }
};

// DELETE /api/users/:id
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await userRepo.getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        await userRepo.deleteUser(userId);

        res.clearCookie("accessToken", cookieOptions);
        res.status(204).send();
    } catch(err){
        errorHandler(err, req, res);
    }
};

// GET /api/users
export const getAllUsers = async (req, res) => {
    try {
        const users = await userRepo.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        errorHandler(err, req, res);
    }
};

// ------------------

// GET /api/users/profile
export const getProfile = async (req, res) => {
    try {
        const user = await userRepo.getUserById(req.user.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }
        res.status(200).json(user);
    } catch (err) {
        errorHandler(err, req, res);
    }
};

// PUT /api/users/profile
export const updateProfile = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { username, email } = req.body;

        const user = await userRepo.getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        const updatedUser = await userRepo.updateUser(userId, {username, email});
        res.status(200).json({message: "Profile updated successfully."});

    } catch (err) {
        errorHandler(err, req, res);
    }
};

// DELETE /api/users/profile
export const deleteProfile = async (req, res) => {
    try {
        const userId = req.user.userId;

        const user = await userRepo.getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        await userRepo.deleteUser(userId);

        res.clearCookie("accessToken", cookieOptions);
        res.status(204).send();
    } catch(err){
        errorHandler(err, req, res);
    }
};