import University from "../models/university.js";
import AcademicUnit from "../models/academicUnit.js";
import Major from "../models/major.js";
import Facility from "../models/facility.js";
import Admission from "../models/admission.js";
import Scholarship from "../models/scholarship.js";
import { Op } from "sequelize";

// Get all universities
export const getAllUniversities = async () => {
    return await University.findAll();
}

// Get a university by ID
export const getUniversityById = async (universityId) => {
    return await University.findByPk(universityId);
}

// Get university details
export const getUniversityFullDetail = async(universityId) => {
    return await University.findByPk(universityId, {
        include: [
            { model: Admission, attributes: [ "title", "description", "requirements", "contact" ] },
            { model: AcademicUnit, attributes: [ "name", "type", "description" ],
                include: [
                    { model: Major, attributes: [ "name" ] }
                ]
            }
        ]
    });
}

// Create a new university
export const createUniversity = async (universitydata) => {
    return await University.create(universitydata);
}

// Update an existing university
export const updateUniversity = async(universityId, universitydata) => {
    await University.update(universitydata, {
        where: {universityId}
    });

    return await University.findByPk(universityId);
}

// Delete a university
export const deleteUniversity = async (universityId) => {
    return await University.destroy({where: {universityId}});
}

// Search + Filter + Pagination
export const searchUniversities = async (filters) => {
    const where = {};

    if (filters.search?.trim()) {
        where[Op.or] = [
            {
                campusName: {
                    [Op.like]: `%${filters.search}%`
                }
            },
            {
                shortName: {
                    [Op.like]: `%${filters.search}%`
                }
            }
        ];
    }

    if (filters.type?.trim()) {
        where.type = filters.type;
    }

    if (filters.province?.trim()) {
        where.province = filters.province;
    }

    if (filters.city?.trim()) {
        where.city = filters.city;
    }

    // Filter by Fee Range
    const minFee = filters.minFee ? Number(filters.minFee) : null;
    const maxFee = filters.maxFee ? Number(filters.maxFee) : null;

    if (minFee !==null || maxFee !== null) {
        where.tuition_fee = {};

        if (minFee !== null) {
            where.tuition_fee[Op.gte] = minFee;
        }
        if (maxFee !== null) {
            where.tuition_fee[Op.lte] = maxFee;
        }
    }

    const page = Number(filters.page) || 1;
    const limit = Number(filters.limit) || 10;
    const offset = (page - 1) * limit;

    const { rows, count } = await University.findAndCountAll({
        where,
        limit,
        offset,
        order: [["campusName", "ASC"]]
    });

    return {
        universities: rows,
        pagination: {
            total: count,
            page,
            limit,
            totalPages: Math.ceil(count / limit)
        }
    }
};