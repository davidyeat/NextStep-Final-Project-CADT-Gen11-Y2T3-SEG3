import { Router } from 'express';
import { createAdmission, getAllAdmission, getAdmissionById, updateAdmission, deleteAdmission } from '../controllers/admissionController.js';

const admissionRouter = Router();

// Get all university admission
admissionRouter.get('/', getAllAdmission);

// Get university admission by ID
admissionRouter.get('/:admissionId', getAdmissionById);

// Create university admission
admissionRouter.post('/', createAdmission);

// Update university admission
admissionRouter.put('/:admissionId', updateAdmission);

// Delete university admission
admissionRouter.delete('/:admissionId', deleteAdmission);

export default admissionRouter;