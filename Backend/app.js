import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import cors from "cors";

const app = express();
dotenv.config({ path: "Backend/config/.env" });
connectDatabase();

app.use(express.json());
app.use(cors());

app.route("/get").get((req, res, nex) => {
  res.send("Post request committed successfully");
});

export default app;
