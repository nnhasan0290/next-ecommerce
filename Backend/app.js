import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import cors from "cors";
import productRoutes from "./Routes/productRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import paymentRoutes from "./Routes/paymentRoutes.js";
import multer from "multer";
import errorHandler from "./middlewars/error.js";
import cookieParser from "cookie-parser";

const app = express();
const upload = multer();

app.use(express.json());
app.use(cookieParser());

dotenv.config({ path: "Backend/config/.env" });
connectDatabase();

app.use(
  cors({
    origin:
      "https://3000-nnhasan0290-nextecommer-oyfekk44ino.ws-us63.gitpod.io",
    credentials: true,
  })
);

app.use(upload.array());

app.use("/api", productRoutes);

app.use("/api", userRoutes);

app.use("/api", paymentRoutes);

app.use(errorHandler);
export default app;
