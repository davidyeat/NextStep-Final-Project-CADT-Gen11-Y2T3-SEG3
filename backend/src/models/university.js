import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const University = sequelize.define('University', {
    universityId: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    campusName: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true
    },
    shortName: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    websiteUrl: {
        type: DataTypes.STRING
    },
    logoUrl: {
        type: DataTypes.STRING
    },
    coverImageUrl: {
        type: DataTypes.STRING
    },
    minAmount: {
        type: DataTypes.DECIMAL(10, 2)
    },
    maxAmount: {
        type: DataTypes.DECIMAL(10, 2)
    },
    province: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.TEXT
    },
    description: {
        type: DataTypes.JSON
    },
    vision: {
        type: DataTypes.JSON
    },
    mission: {
        type: DataTypes.JSON
    }
});

export default University;