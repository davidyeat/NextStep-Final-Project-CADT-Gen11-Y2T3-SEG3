import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const University = sequelize.define('University', {
    universityId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    campusName: {type: DataTypes.STRING, allowNull: false, unique: true},
    shortName: {type: DataTypes.STRING},
    type: {type: DataTypes.STRING},
    websiteUrl: {type: DataTypes.STRING},
    logoUrl: {type: DataTypes.STRING},
    coverImageUrl: {type: DataTypes.STRING},
    province: {type: DataTypes.STRING},
    city: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phoneNumber: {type: DataTypes.STRING},
    address: {type: DataTypes.TEXT},
    description: {type: DataTypes.TEXT},
    vision: {type: DataTypes.TEXT},
    mission: {type: DataTypes.TEXT}
});

export default University;