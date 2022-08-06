import express from "express";
import Product from "../models/productSchema.js";
const router = express.Router();

router.route("/product/create").post(async (req, res, nex) => {
  try {
    console.log(req.body);
    const created_product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      created_product,
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
export default router;
