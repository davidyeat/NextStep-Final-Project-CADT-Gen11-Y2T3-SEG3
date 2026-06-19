import { DataTypes } from "sequelize";
import sequelize from "../db/database.js";
import University from "./university.js";

const Facility = sequelize.define('Facility', {
    facilityId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    universityId: {type: DataTypes.INTEGER, allowNull: false },
    name: {type: DataTypes.STRING},
    imageUrl: {type: DataTypes.STRING}
});

export default Facility;