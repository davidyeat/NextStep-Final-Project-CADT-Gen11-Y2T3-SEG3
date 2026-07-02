import sequelize from "../config/database.js";
import Scholarship from "../models/scholarship.js";

// Get all scholarships
export const getAllScholarships = async() => {
    return await Scholarship.findAll();
};

// Get a scholarship by ID
export const getScholarshipById = async(scholarshipId) => {
    return await Scholarship.findOne({where: {scholarshipId: scholarshipId}});
};

// Create a new Scholarship
export const createScholarship = async(scholarshipData) => {
    return await Scholarship.create(scholarshipData);
};

// Update a scholarship
export const updateScholarship = async(scholarshipId, scholarshipData) => {
    return await Scholarship.update(scholarshipData, {where: {scholarshipId}});
};

// Delete a scholarship
export const deleteScholarship = async(scholarshipId) => {
    return await Scholarship.destroy({where: {scholarshipId: scholarshipId}});
};