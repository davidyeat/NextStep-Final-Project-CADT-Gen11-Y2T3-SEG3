import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Department = sequelize.define('Department', {
    departmentId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    universityId: {type: DataTypes.INTEGER, allowNull: false },
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT}
});

export default Department;