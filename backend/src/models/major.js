import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Major = sequelize.define("Major", {
    majorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    academicUnitId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },

    degreeLevel: {
        type: DataTypes.ENUM("Associate", "Bachelor", "Master", "PhD"),
        allowNull: false
    },

    tuitionFee: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0
        }
    },

    description: {
        type: DataTypes.TEXT
    },

    learningOutcomes: {
        type: DataTypes.JSON
    },

    futureCareerProspects: {
        type: DataTypes.JSON
    }
}, {
    timestamps: true
});

export default Major;