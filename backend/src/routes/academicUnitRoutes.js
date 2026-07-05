import { Router } from "express";
import { getAllAcademicUnits, getAcademicUnitById, createAcademicUnit, updateAcademicUnit, deleteAcademicUnit } from "../controllers/academicUnitController.js";

const academicUnitRoutes = Router();

// GET /api/academic-units
academicUnitRoutes.get("/", getAllAcademicUnits);

// GET /api/academic-units/:id
academicUnitRoutes.get("/:id", getAcademicUnitById);

// POST /api/academic-units
academicUnitRoutes.post("/", createAcademicUnit);

// PUT /api/academic-units/:id
academicUnitRoutes.put("/:id", updateAcademicUnit);

// DELETE /api/academic-units/:id
academicUnitRoutes.delete("/:id", deleteAcademicUnit);

export default academicUnitRoutes;