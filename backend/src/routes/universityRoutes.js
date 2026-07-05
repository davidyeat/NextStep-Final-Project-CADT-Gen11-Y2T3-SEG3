import {  Router } from "express";
import { getAllUniversities, getUniversityById,getUniversityFullDetail ,createUniversity, updateUniversity, deleteUniversity } from "../controllers/universityController.js";

const universityRoutes = Router();

// GET /api/universities
universityRoutes.get("/", getAllUniversities);

// GET /api/universities/:id
universityRoutes.get("/:id", getUniversityById);

// GET /api/universities/:id/full
universityRoutes.get("/:id/full", getUniversityFullDetail);

// POST api/universities
universityRoutes.post("/", createUniversity);

// PUT /api/universities/:id
universityRoutes.put("/:id", updateUniversity);

// DELETE /api/universities/:id
universityRoutes.delete("/:id", deleteUniversity);

export default universityRoutes;