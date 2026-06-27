import { Router } from "express";
import { getUserById, getAllUsers, getProfile, updateProfile, deleteProfile, deleteUser } from "../controllers/userController.js";
import authenticationToken from "../middlewares/authenticationToken.js";
import authorizeRole from "../middlewares/authorizeRole.js";

const userRoutes = Router();

// User profile routes
userRoutes.get("/profile", authenticationToken, getProfile);
userRoutes.put("/profile", authenticationToken, updateProfile);
userRoutes.delete("/profile", authenticationToken, deleteProfile);

// Public routes
userRoutes.get("/", authenticationToken, authorizeRole(1), getAllUsers); // Admin only
userRoutes.get("/:id", authenticationToken, authorizeRole(1), getUserById); // Admin only


// Admin route to delete any user
userRoutes.delete("/:id", authenticationToken, authorizeRole(1), deleteUser); // Admin only

export default userRoutes;