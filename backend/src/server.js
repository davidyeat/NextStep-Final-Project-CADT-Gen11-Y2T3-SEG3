import dotenv from "dotenv";
dotenv.config();

import sequelize from "./db/database.js";
import express from "express";
import "./models/index.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  
    await sequelize.sync({force: false});
    console.log("Database models synchronized successfully.");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    })
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1); // Exit the process with an error code
  }
}
startServer();
