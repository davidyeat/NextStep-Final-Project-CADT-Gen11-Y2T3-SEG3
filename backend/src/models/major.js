import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";

const Major = sequelize.define('Major', {
    majorId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    departmentId: {type: DataTypes.INTEGER, allowNull: false },
    categoryId: {type: DataTypes.INTEGER, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    degreeLevel: {type: DataTypes.STRING, allowNull: false},
    tuitionFee: {type: DataTypes.DECIMAL(10, 2), allowNull: false},
    description: {type: DataTypes.TEXT},
    learningOutcomes: {type: DataTypes.TEXT},
    futureCareerProspects: {type: DataTypes.TEXT},
});

export default Major;