import { catchAsyncError } from "../middlewars/catchAsyncErrors.js";
import Product from "./../Models/productModel.js";

export const createProduct = catchAsyncError(async (req, res, nex) => {
  console.log(req.body);
  const product = await Product.create(req.body);
  res.send({ success: true, product });
});
