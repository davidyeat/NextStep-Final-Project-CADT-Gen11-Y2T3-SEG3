import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AssessmentAnswer = sequelize.define("AssessmentAnswer", {
    answerId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    assessmentId: { type: DataTypes.INTEGER, allowNull: false },
    questionId: { type: DataTypes.INTEGER, allowNull: false },
    optionId: { type: DataTypes.INTEGER, allowNull: true },
    answerValue: { type: DataTypes.TEXT, allowNull: true },
}, {
    timestamps: true,
    indexes: [{ unique: true, fields: ["assessmentId", "questionId", "optionId"] }],
});

export default AssessmentAnswer;
