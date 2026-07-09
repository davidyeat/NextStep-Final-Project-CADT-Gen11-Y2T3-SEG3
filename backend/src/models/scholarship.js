import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Scholarship = sequelize.define('Scholarship', {
    scholarshipId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fundingId: {type: DataTypes.INTEGER, allowNull: false },
    providerId: {type: DataTypes.INTEGER, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false},
    studyIn: {type: DataTypes.STRING},
    description: {type: DataTypes.TEXT},
    coverImage: {type: DataTypes.STRING},
    degreeLevel: {type: DataTypes.STRING},
    minAmount: {type: DataTypes.DECIMAL(10, 2)},
    maxAmount: {type: DataTypes.DECIMAL(10, 2)},
    currency: {type: DataTypes.STRING},
    availableSlots: {type: DataTypes.INTEGER},
    benefits: {type: DataTypes.JSON},
    majorOffered: {type: DataTypes.JSON},
    applicationDeadline: {type: DataTypes.DATE},
    applicationProcess: {type: DataTypes.JSON},
    applicationLink: {type: DataTypes.STRING},
    documentRequirements: {type: DataTypes.JSON},
    eligibilityCriteria: {type: DataTypes.JSON},
    status: {type: DataTypes.STRING},
});

export default Scholarship;