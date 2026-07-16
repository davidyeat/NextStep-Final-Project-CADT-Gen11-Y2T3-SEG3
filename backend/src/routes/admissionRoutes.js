import { Router } from 'express';
import { createAdmission, getAllAdmission, getAdmissionById, updateAdmission, deleteAdmission } from '../controllers/admissionController.js';
import authenticationToken from "../middlewares/authenticationToken.js";
import authorizeRole from "../middlewares/authorizeRole.js";

const admissionRouter = Router();

// Get all university admission
admissionRouter.get('/', getAllAdmission);

// Get university admission by ID
admissionRouter.get('/:admissionId', getAdmissionById);

// Create university admission
admissionRouter.post('/', authenticationToken, authorizeRole(1), createAdmission);

// Update university admission
admissionRouter.put('/:admissionId', authenticationToken, authorizeRole(1), updateAdmission);

// Delete university admission
admissionRouter.delete('/:admissionId', authenticationToken, authorizeRole(1), deleteAdmission);

export default admissionRouter;
