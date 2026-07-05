import * as universityRepo from "../repositories/universityRepository.js";
import errorHandler from "../middlewares/errorMiddleware.js";

// GET ALL + SEARCH
export const getAllUniversities = async (req, res) => {
    try {
        const universities = await universityRepo.searchUniversities(req.query);
        res.status(200).json(universities);
    } catch (error) {
        errorHandler(error, req, res);
    }
};

// GET BY ID
export const getUniversityById = async (req, res) => {
    try {
        const university = await universityRepo.getUniversityById(req.params.id);

        if (!university) {
            return res.status(404).json({ 
                success: false,
                message: "University not found!" 
            });
        }

        res.status(200).json(university);
    } catch (error) {
        errorHandler(error, req, res);
    }
};

// GET UNIVERSITY DETAILS
export const getUniversityFullDetail = async (req, res) => {
    try {
        const university = await universityRepo.getUniversityFullDetail(req.params.id);

        if (!university) {
            return res.status(404).json({
                success: false,
                message: "University not found"
            });
        }

        res.status(200).json(university);
    } catch (err) {
        errorHandler(err, req, res);
    }
};

// POST CREATE
export const createUniversity = async (req, res) => {
    try {
        const { 
            campusName, shortName, type, websiteUrl, logoUrl, coverImageUrl, province, 
            city,email, phoneNumber, address, description, vision,mission
        } = req.body;
        
        const newUniversity = await universityRepo.createUniversity({
            campusName, shortName, type, websiteUrl, logoUrl, coverImageUrl, province,
            city, email, phoneNumber,  address, description, vision, mission
        });

        return res.status(201).json({
            success: true,
            message: "University create successfully",
            data: newUniversity
        });
    } catch (error) {
        errorHandler(error, req, res);
    }
};

// PUT UPDATE
export const updateUniversity = async (req, res) => {
    try {
        const universityId = req.params.id;
        const {
            campusName, shortName, type, websiteUrl, logoUrl, coverImageUrl, province, 
            city,email, phoneNumber, address, description, vision, mission
        } = req.body;

        const updatedUniversity = await universityRepo.updateUniversity(universityId, {
            campusName, shortName, type, websiteUrl, logoUrl, coverImageUrl, province, 
            city,email, phoneNumber, address, description, vision,mission
        });

        return res.status(200).json({
            success: true,
            message: "University updated successfully",
            data: updatedUniversity
        });
    } catch (error) {
        errorHandler(error, req, res);
    }
};

// DELETE 
export const deleteUniversity = async (req, res) => {
    try {
        await universityRepo.deleteUniversity(universityId);
        
        res.status(204).send();
    } catch (error) {
        errorHandler(error, req, res);
    }
};