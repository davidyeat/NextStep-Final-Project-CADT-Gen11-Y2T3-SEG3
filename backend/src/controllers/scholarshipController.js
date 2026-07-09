import * as scholarshipRepo from "../repositories/scholarshipRepository.js";
import errorHandler from "../middlewares/errorMiddleware.js";

// GET ALL + SEARCH
export async function getAllScholarships(req, res){
    try {
        const scholarships = await scholarshipRepo.getAllScholarships();
        res.status(200).json(scholarships);
    } catch(error){
        errorHandler(error, req, res);
    }
};

// GET BY ID 
export async function getScholarshipById(req, res){
    try {
        const scholarship = await scholarshipRepo.getScholarshipById(req.params.id);

        if(!scholarship){
            return res.status(404).json({
                success: false,
                message: "Scholarship not found!"
            });
        }

        res.status(200).json(scholarship);
    } catch(error){
        errorHandler(error, req, res);
    }
};

// GET SCHOLARSHIP DETAILS
export async function getScholarshipFullDetail(req, res){
    try {
        const scholarship = await scholarshipRepo.getScholarshipFullDetail(req.params.id);

        if(!scholarship){
            return res.status(404).json({
                success: false,
                message: "Scholarship not found!"
            });
        }

        res.status(200).json(scholarship);
    } catch(error){
        errorHandler(error, req, res);
    }
};

// POST CREATE
export async function createScholarship(req, res) {
    try {
        const {
            fundingId, providerId, title, studyIn, description, degreeLevel, minAmount, maxAmount, currency, 
            availableSlots, benefits, majorOffered, applicationDeadline, applicationProcess, 
            applicationLink, documentRequirements, eligibilityCriteria, status
        } = req.body;

        const newScholarship = await scholarshipRepo.createScholarship({
            fundingId, providerId, title, studyIn, description, degreeLevel, minAmount, maxAmount, currency, 
            availableSlots, benefits, majorOffered, applicationDeadline, applicationProcess, 
            applicationLink, documentRequirements, eligibilityCriteria, status
        });

        res.status(201).json({
            success: true,
            message: "Scholarship create successfully",
            data: newScholarship
        });
    } catch(error){
        errorHandler(error, req, res);
    }
};

// PUT UPDATE
export async function updateScholarship(req, res) {
    try {
        const scholarshipId = req.params.id;

        const {
            fundingId, providerId, title, studyIn, description, degreeLevel, minAmount, maxAmount, currency, 
            availableSlots, benefits, majorOffered, applicationDeadline, applicationProcess, 
            applicationLink, documentRequirements, eligibilityCriteria, status
        } = req.body;

        const newScholarship = await scholarshipRepo.updateScholarship(scholarshipId, {
            fundingId, providerId, title, studyIn, description, degreeLevel, minAmount, maxAmount, currency, 
            availableSlots, benefits, majorOffered, applicationDeadline, applicationProcess, 
            applicationLink, documentRequirements, eligibilityCriteria, status
        });

        res.status(200).json({
            success: true,
            message: "Scholarship updated successfully",
            data: newScholarship
        });
    } catch(error){
        errorHandler(error, req, res);
    }
};  

// DELETE /api/scholarships/:id
export async function deleteScholarship(req, res) {
    try {
        await scholarshipRepo.deleteScholarship(req.params.id);
        res.status(204).send();
    } catch(error){
        errorHandler(error, req, res);
    }
};