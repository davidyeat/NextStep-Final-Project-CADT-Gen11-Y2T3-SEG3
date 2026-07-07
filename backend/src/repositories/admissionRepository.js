import Admission from "../models/admission.js";
import { Op } from "sequelize";

// Get all university admission
export const getAllAdmission = async() => {
    return await Admission.findAll();
}

// Get university admission  by ID 
export const getAdmissionById = async(admissionId) => {
    return await Admission.findByPk(admissionId);
}

// Create university admission 
export const createAdmission = async(admissionData) => {
    return await Admission.create(admissionData);
}

// Update university admission
export const updateAdmission = async(admissionId, admissionData) => {
    await Admission.update(admissionData, {
        where: {admissionId}
    })

    return await Admission.findByPk(admissionId);
}

// Delete university admission
export const deleteAdmission = async(admissionId) => {
    return await Admission.destroy({
        where: {admissionId}
    })
}