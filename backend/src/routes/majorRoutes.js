import { Router } from "express";
import { getAllMajors, getMajorById, createMajor, updateMajor, deleteMajor } from "../controllers/majorController.js";

const majorRoutes = Router();

majorRoutes.get("/", getAllMajors);
majorRoutes.get("/:id", getMajorById);
majorRoutes.post("/", createMajor);
majorRoutes.put("/:id", updateMajor);
majorRoutes.delete("/:id", deleteMajor);

export default majorRoutes;