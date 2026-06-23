import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Provider = sequelize.define("Provider", {
  providerId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  providerName: { type: DataTypes.STRING, allowNull: false },
  providerType: { type: DataTypes.STRING, allowNull: false }
});

export default Provider;
