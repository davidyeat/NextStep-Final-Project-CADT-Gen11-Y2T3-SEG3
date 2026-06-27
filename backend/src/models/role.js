import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Role = sequelize.define('Role', {
    roleId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    roleName: {type: DataTypes.STRING(20), allowNull: false, unique: true},
    description: {type: DataTypes.STRING, allowNull: true},
    isActive: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true}
});

export default Role;