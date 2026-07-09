import ENV from "./config/index.js";
import sequelize from "./config/database.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import errorHandler from "./middlewares/errorMiddleware.js";
import "./models/index.js";

import universityRoutes from "./routes/universityRoutes.js";
import scholarshipRoutes from "./routes/scholarshipRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import academicUnitRoutes from "./routes/academicUnitRoutes.js";
import majorRoutes from "./routes/majorRoutes.js";
import admissionRoutes from "./routes/admissionRoutes.js";
import recommendationRoutes from "./routes/recommendationRoutes.js";

import { serveSwagger, setupSwagger } from './config/swagger.js';
import { register } from "./controllers/authController.js";

// Middleware
const app = express();
const allowedOrigins = new Set(
  [
    process.env.FRONTEND_ORIGIN,
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:4173',
    'http://127.0.0.1:4173',
  ].filter(Boolean),
);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.has(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`Origin ${origin} is not allowed by CORS`));
    },
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.resolve("src/public")));
app.set("view engine", "ejs");
app.set("views", path.resolve("src/views"));

// Routes
app.use('/docs', serveSwagger, setupSwagger);
app.use("/api/universities", universityRoutes);
app.use("/api/scholarships", scholarshipRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/academic-units", academicUnitRoutes);
app.use("/api/majors", majorRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/recommendations", recommendationRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = ENV.PORT || 4000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection has been established successfully.');

    await sequelize.sync({ force: false });
    console.log("✅ Database models synchronized successfully.");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    })
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
}
startServer();
