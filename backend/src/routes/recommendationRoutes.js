import { Router } from "express";
import authenticationToken from "../middlewares/authenticationToken.js";
import { generateRecommendation } from "../controllers/recommendationController.js";

const recommendationRoutes = Router();

recommendationRoutes.post("/", authenticationToken, generateRecommendation);

export default recommendationRoutes;
