import ENV from "./config/index.js";
import sequelize from "./config/database.js";
import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import errorHandler from "./middlewares/errorMiddleware.js";
import "./models/index.js";

import universityRoutes from "./routes/universityRoutes.js";
import scholarshipRoutes from "./routes/scholarshipRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import { serveSwagger, setupSwagger } from './config/swagger.js';
import { register } from "./controllers/authController.js";

// Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.resolve("src/public")));
app.set("view engine", "ejs");
app.set("views", path.resolve("src/views"));

// Page routes
app.get("/", (req, res) => res.render("home"));
app.get("/login", (req, res) => res.render("login"));
app.get("/register", (req, res) => res.render("signup"));
app.get("/smoothies", (req, res) => res.render("smoothies"));

// Routes
app.use('/docs', serveSwagger, setupSwagger);
app.use("/api/universities", universityRoutes);
app.use("/api/scholarships", scholarshipRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Error handling middleware
app.use(errorHandler);

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
    console.error("❌ Unable to connect to the database:", error);
  }
}
startServer();
