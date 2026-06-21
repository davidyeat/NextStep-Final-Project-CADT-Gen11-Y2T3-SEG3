import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const MajorCategory = sequelize.define('MajorCategory', {
    categoryId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT},
    imageUrl: {type: DataTypes.STRING}
});

export default MajorCategory;