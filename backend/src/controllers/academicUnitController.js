import * as academicUnitRepo from "../repositories/academicUnitRepository.js";
import errorHandler from "../middlewares/errorMiddleware.js";

// GET ALL + SEARCH
export const getAllAcademicUnits = async (req, res) => {
    try {
        const data = await academicUnitRepo.searchAcademicUnits(req.query);

        return res.status(200).json(data);
    } catch (err) {
        errorHandler(err, req, res);
    }
};

// GET BY ID
export const getAcademicUnitById = async (req, res) => {
    try {
        const academicUnit = await academicUnitRepo.getAcademicUnitById(req.params.id);

        if (!academicUnit) {
            return res.status(404).json({
                success: false,
                message: "Academic unit not found"
            });
        }

        return res.status(200).json(academicUnit);
    } catch (err) {
        errorHandler(err, req, res);
    }
};

// CREATE
export const createAcademicUnit = async (req, res) => {
    try {
        const newAcademicUnit = await academicUnitRepo.createAcademicUnit(req.body);

        return res.status(201).json({
            success: true,
            message: "Academic unit created successfully",
            data: newAcademicUnit
        });
    } catch (err) {
        errorHandler(err, req, res);
    }
};

// UPDATE
export const updateAcademicUnit = async (req, res) => {
    try {
        const updated = await academicUnitRepo.updateAcademicUnit(
            req.params.id,
            req.body
        );

        return res.status(200).json({
            success: true,
            message: "Academic unit updated successfully",
            data: updated
        });
    } catch (err) {
        errorHandler(err, req, res);
    }
};

// DELETE
export const deleteAcademicUnit = async (req, res) => {
    try {
        await academicUnitRepo.deleteAcademicUnit(req.params.id);

        return res.status(200).json({
            success: true,
            message: "Academic unit deleted successfully"
        });
    } catch (err) {
        errorHandler(err, req, res);
    }
};