import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";

const Role = sequelize.define('Role', {
    roleId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
    isActive: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true}
});

export default Role;