import { Router } from 'express';
import { getDashboardStats } from '../controllers/dashboardController.js';

const dashboardRoutes = Router();
dashboardRoutes.get("/dashboard", getDashboardStats);

export default dashboardRoutes;
