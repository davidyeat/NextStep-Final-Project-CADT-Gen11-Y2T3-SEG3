import sequelize from "../config/database.js";
import Major from "../models/major.js";

// Get all majors
export const getAllMajors = async () => {
    return await Major.findAll();
}

// Get a major by ID
export const getMajorById = async (majorId) => {
    return await Major.findOne({where: {majorId: majorId}});
}

// Create a new major
export const createMajor = async (majordata) => {
    return await Major.create(majordata);
}

// Update an existing major
export const updateMajor = async(majorId, majordata) => {
    return await Major.update(majordata, {where: {majorId}})
}

// Delete a major
export const deleteMajor = async (majorId) => {
    return await Major.destroy({where: {majorId}});
}   
export const getAllUniversities = async () => {
    return await University.findAll();
}