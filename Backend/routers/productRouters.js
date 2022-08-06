import express from "express";
import Product from "../models/productSchema.js";
const router = express.Router();

router.post("/product/create", async (req, res, nex) => {
  const created_product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    created_product,
  });
});
export default router;
