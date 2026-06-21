import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Profile = sequelize.define('Profile', {
    profileId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: DataTypes.INTEGER, allowNull: false },
    firstName: {type: DataTypes.STRING, allowNull: false},
    lastName: {type: DataTypes.STRING, allowNull: false},
    dateOfBirth: {type: DataTypes.DATEONLY},
    gender: {type: DataTypes.STRING},
    nationality: {type: DataTypes.STRING},
    bio: {type: DataTypes.TEXT},
    phoneNumber: {type: DataTypes.STRING},
    address: {type: DataTypes.TEXT},
    avatarUrl: {type: DataTypes.STRING}
});

export default Profile;