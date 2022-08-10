import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import cors from "cors";
import productRoutes from "./Routes/productRoutes.js";
import multer from "multer";
import errorHandler from "./middlewars/error.js";

const app = express();
const upload = multer();
dotenv.config({ path: "Backend/config/.env" });
connectDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(upload.array());

app.use("/api", productRoutes);

app.use(errorHandler);
export default app;
