import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const RecommendationRun = sequelize.define("RecommendationRun", {
    recommendationRunId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    assessmentId: { type: DataTypes.INTEGER, allowNull: false },
    modelName: { type: DataTypes.STRING(100), allowNull: false },
    algorithmVersion: { type: DataTypes.STRING(50), allowNull: false },
    status: { type: DataTypes.ENUM("pending", "completed", "failed"), allowNull: false, defaultValue: "pending" },
    errorMessage: { type: DataTypes.TEXT },
    generatedAt: { type: DataTypes.DATE, allowNull: true },
}, { timestamps: true });

export default RecommendationRun;
