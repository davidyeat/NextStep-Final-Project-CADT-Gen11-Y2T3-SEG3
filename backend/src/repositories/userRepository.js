import sequelize from "../config/database.js";
import User from "../models/user.js";
import Role from "../models/role.js";

/**
 * Get all users from the database
 * @returns 
 */
export const getAllUsers = async() => {
    return await User.findAll({
        attributes: {
            exclude: ['password']
        },
        include: [{ model: Role, attributes: ['roleId', 'roleName'] }]
    });
};

/**
 * Get a user by ID from the database
 * @param {*} userId 
 * @returns 
 */
export const getUserById = async(userId) => {
    return await User.findOne({
        where: { userId },
        attributes: {
            exclude: ['password']
        },
        include: [{ model: Role, attributes: ['roleId', 'roleName'] }]
    });
}

/**
 * Update a user by ID in the database
 * @param {*} userId 
 * @param {*} updatedData 
 * @returns 
 */
export const updateUser = async(userId, updatedData) => {
    return await User.update(updatedData, { where: { userId } });
}

/**
 * Delete a user by ID from the database
 * @param {*} userId 
 * @returns 
 */
export const deleteUser = async(userId) => {
    return await User.destroy({ where: { userId } });
}