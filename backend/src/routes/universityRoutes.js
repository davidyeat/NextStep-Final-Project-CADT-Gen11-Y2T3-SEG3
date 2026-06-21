import {  Router } from "express";
import { getAllUniversities, getUniversityById, createUniversity, updateUniversity, deleteUniversity } from "../controllers/universityController.js";

const universityRoutes = Router();
universityRoutes.get("/", getAllUniversities);
universityRoutes.get("/:id", getUniversityById);
universityRoutes.post("/", createUniversity);
universityRoutes.put("/:id", updateUniversity);
universityRoutes.delete("/:id", deleteUniversity);

export default universityRoutes;