import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Subject = sequelize.define("Subject", {
    subjectId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    subjectName: { type: DataTypes.STRING(100), allowNull: false, unique: true },
}, { timestamps: true });

export default Subject;
