import express from "express";
import dotenv from "dotenv";
import productRouters from "./routers/productRouters.js"
const app = express();
dotenv.config();

app.use("/api", productRouters);

export default app;