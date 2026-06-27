import jwt from 'jsonwebtoken';
import ENV from '../config/index.js'

/**
 * Generate a JWT token
 * @param {Object} payload - The payload to include in the token
 * @returns {String} - The generated JWT token
 */
export const generateAccessToken = (payload) => {
    return jwt.sign(
        payload,
        ENV.JWT_SECRET,
        {
            expiresIn: ENV.JWT_ACCESS_EXPIRES_IN
        }
    );
};

/**
 * Verify JWT token
 * @param {String} token - The JWT token to verify
 * @returns {Object} - The decoded payload if the token is valid
 */
export const verifyAccessToken = (token) => {
    return jwt.verify(token, ENV.JWT_SECRET);
};
