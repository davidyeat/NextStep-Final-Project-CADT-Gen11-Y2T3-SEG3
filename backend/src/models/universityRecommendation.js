import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const UniversityRecommendation = sequelize.define("UniversityRecommendation", {
    universityRecommendationId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    recommendationRunId: { type: DataTypes.INTEGER, allowNull: false },
    universityId: { type: DataTypes.INTEGER, allowNull: false },
    matchScore: { type: DataTypes.DECIMAL(5, 2), allowNull: false, validate: { min: 0, max: 100 } },
    reason: { type: DataTypes.TEXT, allowNull: false },
    scoreBreakdown: { type: DataTypes.JSON, allowNull: true },
}, { timestamps: true, indexes: [{ unique: true, fields: ["recommendationRunId", "universityId"] }] });

export default UniversityRecommendation;
