import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define('User', {
    userId: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    roleId: {
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    username: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true,
        validate: {
            notEmpty: { msg: "Username is required" }
        }
    },
    email: {
        type: DataTypes.STRING, 
        allowNull: false, 
        unique: true,
        validate: {
            notEmpty: { msg: "Email is required" },
            isEmail: { msg: "Please enter a valid email address" }
        }
    },
    password: {
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
            notEmpty: { msg: "Password is required" },
            len: {
                args: [6, 100], 
                msg: "Password must be at least 6 characters long"
            }
        }
    }
});

export default User;