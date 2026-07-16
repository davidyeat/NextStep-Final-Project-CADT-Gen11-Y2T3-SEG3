import { Router } from "express";
import { getAllMajors, getMajorById, createMajor, updateMajor, deleteMajor } from "../controllers/majorController.js";
import authenticationToken from "../middlewares/authenticationToken.js";
import authorizeRole from "../middlewares/authorizeRole.js";

const majorRoutes = Router();

majorRoutes.get("/", getAllMajors);
majorRoutes.get("/:id", getMajorById);
majorRoutes.post("/", authenticationToken, authorizeRole(1), createMajor);
majorRoutes.put("/:id", authenticationToken, authorizeRole(1), updateMajor);
majorRoutes.delete("/:id", authenticationToken, authorizeRole(1), deleteMajor);

export default majorRoutes;
