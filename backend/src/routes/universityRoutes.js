import {  Router } from "express";
import { getAllUniversities, getUniversityById,getUniversityFullDetail ,createUniversity, updateUniversity, deleteUniversity } from "../controllers/universityController.js";
import authenticationToken from "../middlewares/authenticationToken.js";
import authorizeRole from "../middlewares/authorizeRole.js";

const universityRoutes = Router();

// GET /api/universities
universityRoutes.get("/", getAllUniversities);

// GET /api/universities/:id
universityRoutes.get("/:id", getUniversityById);

// GET /api/universities/:id/full
universityRoutes.get("/:id/full", getUniversityFullDetail);

// POST api/universities
universityRoutes.post("/", authenticationToken, authorizeRole(1), createUniversity);

// PUT /api/universities/:id
universityRoutes.put("/:id", authenticationToken, authorizeRole(1), updateUniversity);

// DELETE /api/universities/:id
universityRoutes.delete("/:id", authenticationToken, authorizeRole(1), deleteUniversity);

export default universityRoutes;
