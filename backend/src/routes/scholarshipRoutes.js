import { Router } from "express";
import {getAllScholarships, getScholarshipById, getScholarshipFullDetail ,createScholarship, updateScholarship, deleteScholarship} from "../controllers/scholarshipController.js";
import authenticationToken from "../middlewares/authenticationToken.js";
import authorizeRole from "../middlewares/authorizeRole.js";

const scholarshipRoutes = Router();

// GET /api/scholarships
scholarshipRoutes.get("/", getAllScholarships);

// GET /api/scholarships/:id
scholarshipRoutes.get("/:id", getScholarshipById);

// GET /api/scholarships/:id/full
scholarshipRoutes.get("/:id/full", getScholarshipFullDetail);

// POST /api/scholarships
scholarshipRoutes.post("/", authenticationToken, authorizeRole(1), createScholarship);

// PUT /api/scholarships/:id
scholarshipRoutes.put("/:id", authenticationToken, authorizeRole(1), updateScholarship);

// DELETE /api/scholarships/:id
scholarshipRoutes.delete("/:id", authenticationToken, authorizeRole(1), deleteScholarship);

export default scholarshipRoutes;
