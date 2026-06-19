import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";

const Scholarship = sequelize.define('Scholarship', {
    scholarshipId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fundingId: {type: DataTypes.INTEGER, allowNull: false },
    title: {type: DataTypes.STRING, allowNull: false},
    category: {type: DataTypes.STRING},
    description: {type: DataTypes.TEXT},
    degreeLevel: {type: DataTypes.STRING},
    fieldOfStudy: {type: DataTypes.STRING},
    academicYear: {type: DataTypes.STRING},
    amount: {type: DataTypes.DECIMAL(10, 2)},
    currency: {type: DataTypes.STRING},
    availableSlots: {type: DataTypes.INTEGER},
    benefits: {type: DataTypes.TEXT},
    applicationDeadline: {type: DataTypes.DATE},
    applicationProcess: {type: DataTypes.TEXT},
    applicationLink: {type: DataTypes.STRING},
    documentRequirements: {type: DataTypes.TEXT},
    eligibilityCriteria: {type: DataTypes.TEXT},
    status: {type: DataTypes.STRING},
});

export default Scholarship;