import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const FundingType = sequelize.define('FundingType', {
    fundingId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT},
});

export default FundingType;