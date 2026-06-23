import { Router } from "express";
import {getAllScholarships, getScholarshipById, createScholarship, updateScholarship, deleteScholarship} from "../controllers/scholarshipController.js";

const scholarshipRoutes = Router();
scholarshipRoutes.get("/", getAllScholarships);
scholarshipRoutes.get("/:id", getScholarshipById);
scholarshipRoutes.post("/", createScholarship);
scholarshipRoutes.put("/:id", updateScholarship);
scholarshipRoutes.delete("/:id", deleteScholarship);

export default scholarshipRoutes;