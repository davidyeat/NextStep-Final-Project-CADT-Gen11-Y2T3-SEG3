import * as admissionRepo from '../repositories/admissionRepository.js';
import errorHandler from '../middlewares/errorMiddleware.js';

// Get all university admission
export const getAllAdmission = async(req, res) => {
    try {
        const admissions = await admissionRepo.getAllAdmission();
        res.status(200).json(admissions);
    } catch (err) {
        errorHandler(err, res);
    }
}

// Get university admission by ID
export const getAdmissionById = async(req, res) => {
    try {
        const admissionId = req.params.admissionId;
        const admission = await admissionRepo.getAdmissionById(admissionId);
        if (!admission) {
            return res.status(404).json({
                success: false,
                message: 'Admission not found' 
            });
        }
        res.status(200).json(admission);
    } catch (err) {
        errorHandler(err, res);
    }
}

// Create university admission
export const createAdmission = async(req, res) => {
    try {
        const newAdmission = await admissionRepo.createAdmission(req.body);
        res.status(201).json(newAdmission);
    } catch (err) {
        errorHandler(err, res);
    }
}

// Update university admission
export const updateAdmission = async(req, res) => {
    try {
        const admissionId = req.params.admissionId;
        const updatedAdmission = await admissionRepo.updateAdmission(admissionId, req.body);
        if (!updatedAdmission) {
            return res.status(404).json({
                success: false, 
                message: 'Admission not found' 
            });
        }
        res.status(200).json(updatedAdmission);
    } catch (err) {
        errorHandler(err, res);
    }
}

// Delete university admission
export const deleteAdmission = async(req, res) => {
    try {
        const admissionId = req.params.admissionId;
        const deletedAdmission = await admissionRepo.deleteAdmission(admissionId);
        if (!deletedAdmission) {
            return res.status(404).json({
                success: false, 
                message: 'Admission not found' 
            });
        }
        res.status(204).json({ message: 'Admission deleted successfully' });
    } catch (err) {
        errorHandler(err, res);
    }
}