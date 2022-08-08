import express from "express";
import { createProduct } from "../Controllers/productController.js";
const router = express.Router();

router.route("/product/create").post(createProduct);

export default router;
