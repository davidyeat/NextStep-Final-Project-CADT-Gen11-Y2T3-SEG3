import sequelize from "../config/database.js";
import FundingType from "../models/fundingType.js";
import Provider from "../models/provider.js";
import Scholarship from "../models/scholarship.js";
import { Op } from "sequelize";

// Get all scholarships
export const getAllScholarships = async() => {
    return await Scholarship.findAll({
        attributes: ["scholarshipId", "title", "studyIn", "degreeLevel", "applicationDeadline", "coverImage"],
        include: [
            { model: FundingType, attributes: ["fundingId", "name"] },
            { model: Provider, attributes: ["providerId", "providerName", "providerLogo"] }
        ]
    });
};

// Get a scholarship by ID
export const getScholarshipById = async(scholarshipId) => {
    return await Scholarship.findByPk(scholarshipId);
};

// Create a new Scholarship
export const createScholarship = async(scholarshipData) => {
    return await Scholarship.create(scholarshipData);
};

// Get scholarship details
export const getScholarshipFullDetail = async(scholarshipId) => {
    return await Scholarship.findByPk(scholarshipId, {
        include: [
            { model: FundingType, attributes: ["fundingId", "name"] },
            { model: Provider, attributes: [ "providerId", "providerName", "providerLogo", "providerType"] }
        ]
    });
};

// Update a scholarship
export const updateScholarship = async(scholarshipId, scholarshipData) => {
    await Scholarship.update(scholarshipData, {
        where: { scholarshipId }
    });

    return await Scholarship.findByPk(scholarshipId);
};

// Delete a scholarship
export const deleteScholarship = async(scholarshipId) => {
    return await Scholarship.destroy({where: {scholarshipId: scholarshipId}});
};

// Search + Filter + Pagination
export const searchScholarships = async(filters) => {
    const where = {};

    if(filters.search?.trim()) {
        where[Op.or] = [
            {
                title: { [Op.like]: `%${filters.search}%` }
            },
            {
                majorOffered: { [Op.like]: `%${filters.search}%` }
            },
            {
                studyIn: { [Op.like]: `%${filters.search}%` }
            }
        ];
    }

    if(filters.studyIn?.trim()) {
        where.studyIn = filters.studyIn;
    }

    if(filters.degreeLevel?.trim()) {
        where.degreeLevel = filters.degreeLevel;
    }

    if(filters.fundingId) {
        where.fundingId = filters.fundingId;
    }

    if(filters.status?.trim()) {
        where.status = filters.status;
    }

    const minAmount = filters.minAmount ? Number(filters.minAmount) : null;
    const maxAmount = filters.maxAmount ? Number(filters.maxAmount) : null;

    if(minAmount !== null || maxAmount !== null) {
        where.amount = {};

        if(minAmount !== null) {
            where.amount[Op.gte] = minAmount;
        }
        if(maxAmount !== null){
            where.amount[Op.lte] = maxAmount;
        }
    }

    // Pagination
    const page = Number(filters.page) || 1;
    const limit = Number(filters.limit) || 10;
    const offset = (page - 1) * limit;

    // Query
    const { rows, count } = await Scholarship.findAndCountAll({
        where,
        limit,
        offset,
        order: [
            ["applicationDeadline", "ASC"],
            ["title", "ASC"]
        ]
    });

    return {
        scholarships: rows,
        pagination: {
            total: count,
            page,
            limit,
            totalPages: Math.ceil(count / limit)
        }
    };
};   