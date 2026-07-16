import { Router } from 'express';
import { getDashboardStats } from '../controllers/dashboardController.js';
import authenticationToken from "../middlewares/authenticationToken.js";
import authorizeRole from "../middlewares/authorizeRole.js";

const dashboardRoutes = Router();
dashboardRoutes.get("/dashboard", authenticationToken, authorizeRole(1), getDashboardStats);

export default dashboardRoutes;
