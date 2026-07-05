import AcademicUnit from "../models/academicUnit.js";
import { Op } from "sequelize";

// Get all academic units
export const getAllAcademicUnits = async() => {
    return await AcademicUnit.findAll();
}

// Get academic unit by ID
export const getAcademicUnitById = async (academicUnitId) => {
    return await AcademicUnit.findByPk(academicUnitId);
};

// Create
export const createAcademicUnit = async (academicUnitData) => {
    return await AcademicUnit.create(academicUnitData);
};

// Update
export const updateAcademicUnit = async (academicUnitId, academicUnitData) => {
    await AcademicUnit.update(academicUnitData, {
        where: { academicUnitId }
    });

    return await AcademicUnit.findByPk(academicUnitId);
};

// Delete
export const deleteAcademicUnit = async (academicUnitId) => {
    return await AcademicUnit.destroy({
        where: { academicUnitId }
    });
};

// Search + Filter + Pagination
export const searchAcademicUnits = async (filters) => {
    const where = {};

    if (filters.search?.trim()) {
        where.name = {
            [Op.like]: `%${filters.search}%`
        };
    }

    if (filters.universityId) {
        where.universityId = filters.universityId;
    }

    if (filters.type?.trim()) {
        where.type = filters.type;
    }

    const page = Number(filters.page) || 1;
    const limit = Number(filters.limit) || 10;
    const offset = (page - 1) * limit;

    const { rows, count } = await AcademicUnit.findAndCountAll({
        where,
        limit,
        offset,
        order: [["name", "ASC"]]
    });

    return {
        academicUnits: rows,
        pagination: {
            total: count,
            page,
            limit,
            totalPages: Math.ceil(count / limit)
        }
    };
};