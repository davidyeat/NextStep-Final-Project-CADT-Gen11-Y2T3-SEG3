import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AssessmentQuestion = sequelize.define("AssessmentQuestion", {
    questionId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    questionText: { type: DataTypes.TEXT, allowNull: false },
    questionType: { type: DataTypes.ENUM("single_choice", "multiple_choice", "text", "number"), allowNull: false },
    category: { type: DataTypes.STRING(50), allowNull: false },
    isRequired: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
}, { timestamps: true });

export default AssessmentQuestion;
