import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AssessmentSubjectScore = sequelize.define("AssessmentSubjectScore", {
    scoreId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    assessmentId: { type: DataTypes.INTEGER, allowNull: false },
    subjectId: { type: DataTypes.INTEGER, allowNull: false },
    score: { type: DataTypes.DECIMAL(5, 2), allowNull: false, validate: { min: 0, max: 100 } },
}, {
    timestamps: true,
    indexes: [{ unique: true, fields: ["assessmentId", "subjectId"] }],
});

export default AssessmentSubjectScore;
