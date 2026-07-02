import * as majorRepo from "../repositories/majorRepository.js";
import errorHandler from "../middlewares/errorMiddleware.js";

// Get /api/majors
export async function getAllMajors(req, res){
    try {
        const majors = await majorRepo.getAllMajors();
        res.status(200).json(majors);
    } catch(error){
        errorHandler(req, res, error);
    }
};

// Get /api/majors/:id
export async function getMajorById(req, res){
    try {
        const major = await majorRepo.getMajorById(req.params.id);
        if(!major){
            return res.status(404).json({message: "Major not found!"});
        }
        res.status(200).json(major);
    } catch(error){
        errorHandler(req, res, error);
    }
};

// POST /api/majors
export async function createMajor(req, res) {
    try {
        const {
            departmentId,
            name,
            degreeLevel,
            tuitionFee,
            description,
            learningOutcomes,
            futureCareerProspects,
        } = req.body;

        const newMajor = await majorRepo.createMajor({
            departmentId,
            name,
            degreeLevel,
            tuitionFee,
            description,
            learningOutcomes,
            futureCareerProspects
        });
        res.status(201).json(newMajor);
    } catch (error) {
        errorHandler(req, res, error);
    }
};

// PUT /api/majors/:id
export async function updateMajor(req, res) {
    try {
        const { majorId } = req.params;
        const {
            departmentId,
            name,
            degreeLevel,
            tuitionFee,
            description,
            learningOutcomes,
            futureCareerProspects,
        } = req.body;

        const updatedMajor = await majorRepo.updateMajor(majorId, {
            departmentId,
            categoryId,
            name,
            degreeLevel,
            tuitionFee,
            description,
            learningOutcomes,
            futureCareerProspects
        });

        if (!updatedMajor) {
            return res.status(404).json({ message: "Major not found!" });
        }

        res.status(200).json(updatedMajor);
    } catch (error) {
        errorHandler(req, res, error);
    }
};

// DELETE /api/majors/:id
export async function deleteMajor(req, res) {
    try {
        const { majorId } = req.params;
        const major = await majorRepo.getMajorById(majorId);
        if (!major) {
            return res.status(404).json({ message: "Major not found!" });
        }

        await majorRepo.deleteMajor(id);
        res.status(200).json({ message: "Major deleted successfully!" });
    } catch (error) {
        errorHandler(req, res, error);
    }
};
    