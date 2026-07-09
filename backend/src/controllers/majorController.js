import * as majorRepo from "../repositories/majorRepository.js";
import errorHandler from "../middlewares/errorMiddleware.js";

// Get /api/majors
export async function getAllMajors(req, res){
    try {
        const majors = await majorRepo.searchMajors(req.query);

        return res.status(200).json(majors);
    } catch(error){
        errorHandler(error, req, res);
    }
};

// Get /api/majors/:id
export async function getMajorById(req, res){
    try {
        const major = await majorRepo.getMajorById(req.params.id);
        if(!major){
            return res.status(404).json({
                success: false,
                message: "Major not found!"
            });
        }
        res.status(200).json(major);
    } catch(error){
        errorHandler(error, req, res);
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

        return res.status(201).json({
            success: true,
            message: "Major created successfully",
            data: newMajor
        });
    } catch (error) {
        errorHandler(error, req, res);
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
            return res.status(404).json({
                success: false,
                message: "Major not found!",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Major updated successfully",
            data: updateMajor
        });
    } catch (error) {
        errorHandler(error, req, res);
    }
};

// DELETE /api/majors/:id
export async function deleteMajor(req, res) {
    try {
        await majorRepo.deleteMajor(req.params.id);

        res.status(204).json();
    } catch (error) {
        errorHandler(error, req, res);
    }
};
    