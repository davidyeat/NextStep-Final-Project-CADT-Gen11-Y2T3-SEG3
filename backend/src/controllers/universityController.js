import * as universityRepo from "../repositories/universityRepository.js";
import errorHandler from "../middlewares/errorMiddleware.js";

// GET /api/universities
export const getAllUniversities = async (req, res) => {
    try {
        const universities = await universityRepo.getAllUniversities();
        res.status(200).json(universities);
    } catch (error) {
        errorHandler(error, req, res);
    }
};

// Get /api/universities/:id
export const getUniversityById = async (req, res) => {
  try {
        const university = await universityRepo.getUniversityById(req.params.id);
    if (!university) {
        return res.status(404).json({ message: "University not found!" });
    }
    res.status(200).json(university);
  } catch (error) {
    errorHandler(error, req, res);
  }
};

// POST /api/universities
export const createUniversity = async (req, res) => {
    try {
        const { 
            campusName,
            shortName,
            type,
            websiteUrl,
            logoUrl,
            coverImageUrl,
            province,
            city,
            email,
            phoneNumber,
            address,
            description,
            vision,
            mission
        } = req.body;
        
        const newUniversity = await universityRepo.createUniversity({
            campusName,
            shortName,
            type,
            websiteUrl,
            logoUrl,
            coverImageUrl,
            province,
            city,
            email,
            phoneNumber,
            address,
            description,
            vision,
            mission
        });
        res.status(201).json(newUniversity);
    } catch (error) {
        errorHandler(error, req, res);
    }
};

// PUT /api/universities/:id
export const updateUniversity = async (req, res) => {
    try {
        const universityId = req.params.id;
        const {
            campusName,
            shortName,
            type,
            websiteUrl,
            logoUrl,
            coverImageUrl,
            province,
            city,
            email,
            phoneNumber,
            address,
            description,
            vision,
            mission
        } = req.body;

        const updatedUniversity = await universityRepo.updateUniversity(universityId, {
            campusName,
            shortName,
            type,
            websiteUrl,
            logoUrl,
            coverImageUrl,
            province,
            city,
            email,
            phoneNumber,
            address,
            description,
            vision,
            mission
        });
        res.status(200).json(updatedUniversity);
    } catch (error) {
        errorHandler(error, req, res);
    }
};

// DELETE /api/universities/:id
export const deleteUniversity = async (req, res) => {
    try {
        const universityId = req.params.id;
        const university = await universityRepo.getUniversityById(universityId);
        if (!university) {
            return res.status(404).json({ message: "University not found!" });
        }

        await universityRepo.deleteUniversity(universityId);
        res.status(204).send();
    } catch (error) {
        errorHandler(error, req, res);
    }
};

// University Search + Filter
export const searchUniversities = async(req, res) => {
    try {
        const results = await universityRepo.searchUniversities(req.query);
        res.status(200).json(results);
    } catch (error) {
        errorHandler(error, req, res);
    }
}