import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import cors from "cors";
import productRoutes from "./Routes/productRoutes.js";

const app = express();
dotenv.config({ path: "Backend/config/.env" });
connectDatabase();

app.use(express.json());
app.use(cors());
app.use("/api", productRoutes);

class ErrorHandler extends Error {
  constructor(msg, statusCode) {
    super(msg);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default app;
