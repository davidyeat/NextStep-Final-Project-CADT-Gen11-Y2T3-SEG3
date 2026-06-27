import sequelize from "../config/database.js";
import User from "../models/user.js";
import Role from "../models/role.js";

/**
 * Find a user by email
 * @param {*} email 
 * @returns 
 */
export const findUserByEmail = async(email) => {
    return await User.findOne({ 
        where: { email },
        include: [{ model: Role, attributes: ['roleId', 'roleName'] }]
    });
};

/**
 * Find a user by username
 * @param {*} username 
 * @returns 
 */
export const findUserByUsername = async(username) => {
    return await User.findOne({where: { username }});
}

/**
 * Create a new user
 * @param {*} userData 
 * @returns 
 */
export const createUser = async(userData) => {
    return await User.create(userData);
};

/**
 * Find a user by ID
 * @param {*} userId 
 * @returns 
 */
export const findUserById = async(userId) => {
    return await User.findOne({
        where: { userId },
        attributes: {
            exclude: ['password']  // Exclude password from the result
        },
        include: [{ model: Role, attributes: ['roleId', 'roleName'] }]
    });
}