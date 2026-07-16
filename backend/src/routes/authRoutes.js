import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";
import authRateLimit from "../middlewares/authRateLimit.js";

const authRoutes = Router();
authRoutes.post("/register", register);
authRoutes.post("/login", authRateLimit, login);
authRoutes.post("/logout", logout);

export default authRoutes;
