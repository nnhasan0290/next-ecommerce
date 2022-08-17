import express from "express";
import { createProduct } from "../Controllers/productController.js";
import {getAllProducts} from "../Controllers/productController.js";
import isAuthencicated from "../middlewars/auth.js";
const router = express.Router();

router.route("/product/create").post(isAuthencicated,createProduct);
router.route("/products").get(getAllProducts);

export default router;
