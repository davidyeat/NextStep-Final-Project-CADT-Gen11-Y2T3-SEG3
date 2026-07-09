import { Router } from "express";
import {getAllScholarships, getScholarshipById, getScholarshipFullDetail ,createScholarship, updateScholarship, deleteScholarship} from "../controllers/scholarshipController.js";

const scholarshipRoutes = Router();

// GET /api/scholarships
scholarshipRoutes.get("/", getAllScholarships);

// GET /api/scholarships/:id
scholarshipRoutes.get("/:id", getScholarshipById);

// GET /api/scholarships/:id/full
scholarshipRoutes.get("/:id/full", getScholarshipFullDetail);

// POST /api/scholarships
scholarshipRoutes.post("/", createScholarship);

// PUT /api/scholarships/:id
scholarshipRoutes.put("/:id", updateScholarship);

// DELETE /api/scholarships/:id
scholarshipRoutes.delete("/:id", deleteScholarship);

export default scholarshipRoutes;