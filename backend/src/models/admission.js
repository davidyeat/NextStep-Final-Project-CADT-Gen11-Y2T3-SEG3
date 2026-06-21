import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Admission = sequelize.define('Admission', {
    admissionId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.TEXT},
    requirements: {type: DataTypes.TEXT}
});

export default Admission;