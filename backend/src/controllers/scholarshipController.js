import * as scholarshipRepo from "../repositories/scholarshipRepository.js";
import errorHandler from "../middlewares/errorMiddleware.js";

// Get /api/scholarships
export async function getAllScholarships(req, res){
    try {
        const scholarships = await scholarshipRepo.getAllScholarships();
        res.status(200).json(scholarships);
    } catch(error){
        errorHandler(req, res, error);
    }
};

// Get /api/scholarships/:id
export async function getScholarshipById(req, res){
    try {
        const scholarship = await scholarshipRepo.getScholarshipById(req.params.id);
        if(!scholarship){
            return res.status(404).json({message: "Scholarship not found!"});
        }
        res.status(200).json(scholarship);
    } catch(error){
        errorHandler(req, res, error);
    }
};

// POST /api/scholarships
export async function createScholarship(req, res) {
    try {
        const {
            fundingId,
            providerId,
            title,
            studyIn,
            description,
            degreeLevel,
            amount,
            currency,
            availableSlots,
            benefits,
            majorOffered,
            applicationDeadline,
            applicationProcess,
            applicationLink,
            documentRequirements,
            eligibilityCriteria,
            status
        } = req.body;

        const newScholarship = await scholarshipRepo.createScholarship({
            fundingId,
            providerId,
            title,
            studyIn,
            description,
            degreeLevel,
            amount,
            currency,
            availableSlots,
            benefits,
            majorOffered,
            applicationDeadline,
            applicationProcess,
            applicationLink,
            documentRequirements,
            eligibilityCriteria,
            status
        });

        res.status(201).json(newScholarship);
    } catch(error){
        errorHandler(req, res, error);
    }
};

// PUT /api/scholarships/:id
export async function updateScholarship(req, res) {
    try {
        const scholarshipId = req.params.id;
        const {
            fundingId,
            providerId,
            title,
            studyIn,
            description,
            degreeLevel,
            amount,
            currency,
            availableSlots,
            benefits,
            majorOffered,
            applicationDeadline,
            applicationProcess,
            applicationLink,
            documentRequirements,
            eligibilityCriteria,
            status
        } = req.body;

        const newScholarship = await scholarshipRepo.updateScholarship(scholarshipId, {
            fundingId,
            providerId,
            title,
            studyIn,
            description,
            degreeLevel,
            amount,
            currency,
            availableSlots,
            benefits,
            majorOffered,
            applicationDeadline,
            applicationProcess,
            applicationLink,
            documentRequirements,
            eligibilityCriteria,
            status
        });

        res.status(200).json(newScholarship);
    } catch(error){
        errorHandler(req, res, error);
    }
};  

// DELETE /api/scholarships/:id
export async function deleteScholarship(req, res) {
    try {
        const scholarshipId = req.params.id;
        const scholarship = await scholarshipRepo.getScholarshipById(scholarshipId);
        if(!scholarship){
            return res.status(404).json({message: "Scholarship not found!"});
        }

        await scholarshipRepo.deleteScholarship(scholarshipId);
        res.status(204).send();
    } catch(error){
        errorHandler(req, res, error);
    }
};