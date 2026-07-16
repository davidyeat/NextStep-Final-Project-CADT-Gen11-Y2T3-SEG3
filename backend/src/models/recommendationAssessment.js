import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const RecommendationAssessment = sequelize.define("RecommendationAssessment", {
    assessmentId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    preferredDegree: { type: DataTypes.STRING(50) },
    preferredLocation: { type: DataTypes.STRING(100) },
    minTuitionFee: { type: DataTypes.DECIMAL(10, 2) },
    maxTuitionFee: { type: DataTypes.DECIMAL(10, 2) },
    preferredStudyMode: { type: DataTypes.STRING(50) },
    scholarshipRequired: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    assessmentVersion: { type: DataTypes.STRING(20), allowNull: false, defaultValue: "1.0" },
    status: { type: DataTypes.ENUM("draft", "completed", "generating", "generated", "failed"), allowNull: false, defaultValue: "draft" },
}, {
    timestamps: true,
    validate: {
        validTuitionRange() {
            if (this.minTuitionFee !== null && this.maxTuitionFee !== null && Number(this.minTuitionFee) > Number(this.maxTuitionFee)) {
                throw new Error("Minimum tuition fee cannot exceed maximum tuition fee.");
            }
        },
    },
});

export default RecommendationAssessment;
