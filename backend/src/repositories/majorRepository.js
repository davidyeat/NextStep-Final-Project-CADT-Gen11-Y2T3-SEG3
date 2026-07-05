import sequelize from "../config/database.js";
import Major from "../models/major.js";

// Get all majors
export const getAllMajors = async () => {
    return await Major.findAll();
}

// Get a major by ID
export const getMajorById = async (majorId) => {
    return await Major.findByPk(majorId);
}

// Create a new major
export const createMajor = async (majordata) => {
    return await Major.create(majordata);
}

// Update an existing major
export const updateMajor = async(majorId, majordata) => {
    await Major.update(majordata, {
        where: {majorId}
    });

    return await Major.findByPk(majorId);
}

// Delete a major
export const deleteMajor = async (majorId) => {
    return await Major.destroy({where: {majorId}});
}   

// SEARCH + FILTER + PAGINATION
export const searchMajors = async (filters) => {
    const where = {};

    // Search by name
    if (filters.search?.trim()) {
        where.name = {
            [Op.like]: `%${filters.search}%`
        };
    }

    // Filter by academic unit
    if (filters.academicUnitId) {
        where.academicUnitId = filters.academicUnitId;
    }

    // Filter by degree level
    if (filters.degreeLevel?.trim()) {
        where.degreeLevel = filters.degreeLevel;
    }

    // Filter by tuition fee range
    const minFee = filters.minFee ? Number(filters.minFee) : null;
    const maxFee = filters.maxFee ? Number(filters.maxFee) : null;

    if (minFee !== null || maxFee !== null) {
        where.tuitionFee = {};

        if (minFee !== null) {
            where.tuitionFee[Op.gte] = minFee;
        }

        if (maxFee !== null) {
            where.tuitionFee[Op.lte] = maxFee;
        }
    }

    // Pagination
    const page = Number(filters.page) || 1;
    const limit = Number(filters.limit) || 10;
    const offset = (page - 1) * limit;

    const { rows, count } = await Major.findAndCountAll({
        where,
        limit,
        offset,
        order: [["name", "ASC"]]
    });

    return {
        majors: rows,
        pagination: {
            total: count,
            page,
            limit,
            totalPages: Math.ceil(count / limit)
        }
    };
};