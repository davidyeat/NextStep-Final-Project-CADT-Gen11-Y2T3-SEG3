import sequelize from "../config/database.js";
import { DataTypes, ENUM, INTEGER, STRING, TEXT } from "sequelize";

const AcademicUnit = sequelize.define('AcademicUnit', {
    academicUnitId: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    universityId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM('Faculty', 'Institute', 'Department', 'College', 'School'),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    }
});

export default AcademicUnit;