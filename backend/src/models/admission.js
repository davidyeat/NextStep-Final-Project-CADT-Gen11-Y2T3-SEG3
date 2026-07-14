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
        type: DataTypes.TEXT,
        allowNull: false
    },

    description: {
        type: DataTypes.TEXT
    },

    requirements: {
        type: DataTypes.JSON,
    },

    contact: {
        type: DataTypes.JSON,
        allowNull: false
    }
});

export default Admission;