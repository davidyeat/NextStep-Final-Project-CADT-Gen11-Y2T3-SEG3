import { Router } from "express";
import { getAllAcademicUnits, getAcademicUnitById, createAcademicUnit, updateAcademicUnit, deleteAcademicUnit } from "../controllers/academicUnitController.js";
import authenticationToken from "../middlewares/authenticationToken.js";
import authorizeRole from "../middlewares/authorizeRole.js";

const academicUnitRoutes = Router();

// GET /api/academic-units
academicUnitRoutes.get("/", getAllAcademicUnits);

// GET /api/academic-units/:id
academicUnitRoutes.get("/:id", getAcademicUnitById);

// POST /api/academic-units
academicUnitRoutes.post("/", authenticationToken, authorizeRole(1), createAcademicUnit);

// PUT /api/academic-units/:id
academicUnitRoutes.put("/:id", authenticationToken, authorizeRole(1), updateAcademicUnit);

// DELETE /api/academic-units/:id
academicUnitRoutes.delete("/:id", authenticationToken, authorizeRole(1), deleteAcademicUnit);

export default academicUnitRoutes;
