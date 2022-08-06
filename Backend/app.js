import express from "express";
import dotenv from "dotenv";
import productRouters from "./routers/productRouters.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();
app.use(express.json());
dotenv.config();

app.route("/").get((req, res, nex) => {
  res.send("this is a sample api request");
});

//================ MOngodb connection is here ===================
mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("mongodb connected successfully"))
  .catch((err) => console.log(err));
app.use("/api", productRouters);

export default app;
