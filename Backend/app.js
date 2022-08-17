import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import cors from "cors";
import productRoutes from "./Routes/productRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import multer from "multer";
import errorHandler from "./middlewars/error.js";
import cookieParser from "cookie-parser";

const app = express();
const upload = multer();

app.use(express.json());
app.use(cookieParser());

dotenv.config({ path: "Backend/config/.env" });
connectDatabase();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));


app.use(upload.array());

app.get("/", (req, res, next) => {
  res.send({ success: true });
});

app.use("/api", productRoutes);

app.use("/api", userRoutes);

app.use(errorHandler);
export default app;
