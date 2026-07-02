import sequelize from "../config/database.js";
import University from "../models/university.js";
import { Op } from "sequelize";

// Get all universities
export const getAllUniversities = async () => {
    return await University.findAll();
}

// Get a university by ID
export const getUniversityById = async (universityId) => {
    return await University.findOne({where: {universityId: universityId}});
}

// Create a new university
export const createUniversity = async (universitydata) => {
    return await University.create(universitydata);
}

// Update an existing university
export const updateUniversity = async(universityId, universitydata) => {
    return await University.update(universitydata, {where: {universityId}})
}

// Delete a university
export const deleteUniversity = async (universityId) => {
    return await University.destroy({where: {universityId}});
}

// Search universities
export const searchUniversities = async (filters) => {
    const where = {};

    // Search by campusName
    if (filters.search && filters.search.trim() !== "") {
        where.campusName = { [Op.like]: `%${filters.search}%` };
    }

    // Filter by type
    if (filters.type && filters.type.trim() !== "") {
        where.type = { [Op.eq]: filters.type };
    }

    // Filter by province
    if (filters.province && filters.province.trim() !== "") {
        where.province = { [Op.eq]: filters.province };
    }

    // Filter by city
    if (filters.city && filters.city.trim() !== "") {
        where.city = { [Op.eq]: filters.city };
    }

    // Filter by Fee Range
    if (filters.minFee || filters.maxFee) {
        where.tuition_fee = {};
        if (filters.minFee) {
            where.tuition_fee[Op.gte] = filters.minFee;
        }
        if (filters.maxFee) {
            where.tuition_fee[Op.lte] = filters.maxFee;
        }
    }

    return await University.findAll({ where });
}