import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";

const Provider = sequelize.define('Provider', {
    providerId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    providerType: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.TEXT},
    websiteUrl: {type: DataTypes.STRING},
});

export default Provider;