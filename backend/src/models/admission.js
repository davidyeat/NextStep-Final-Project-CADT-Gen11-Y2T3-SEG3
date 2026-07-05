import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Admission = sequelize.define('Admission', {
    admissionId: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },

    universityId: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT
    },

    requirements: {
        type: DataTypes.JSON,
    }
});

export default Admission;