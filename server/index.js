import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/database.js";
import todoRoutes from "./src/routes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

connectDB();
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
