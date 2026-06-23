import ENV from "./config/index.js";
import sequelize from "./config/database.js";
import express from "express";
import "./models/index.js";
import universityRoutes from "./routes/universityRoutes.js";
import scholarshipRoutes from "./routes/scholarshipRoutes.js";

// Middleware
const app = express();
app.use(express.json());

// Routes
app.use("/api/universities", universityRoutes);
app.use("/api/scholarships", scholarshipRoutes);

// Start the server
const PORT = ENV.PORT || 4000;

async function startServer() {
  try {
    await sequelize.sync({force: false});
    console.log("✅ Database models synchronized successfully.");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    })
  } catch (error) {
    console.error(" ❌ Unable to connect to the database:", error);
    process.exit(1); // Exit the process with an error code
  }
}
startServer();
