import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AssessmentOption = sequelize.define("AssessmentOption", {
    optionId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    questionId: { type: DataTypes.INTEGER, allowNull: false },
    optionText: { type: DataTypes.STRING(255), allowNull: false },
    optionValue: { type: DataTypes.STRING(100), allowNull: false },
    displayOrder: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
}, { timestamps: true });

export default AssessmentOption;
