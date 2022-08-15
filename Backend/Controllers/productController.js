import { v2 as cloudinary } from "cloudinary";
import { catchAsyncError } from "../middlewars/catchAsyncErrors.js";
import Product from "./../Models/productModel.js";

export const createProduct = catchAsyncError(async (req, res, nex) => {
  let images = [];
  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  let imageLinks = [];
  for (let i = 0; i < images.length; i++) {
    let results = await cloudinary.uploader.upload(images[i], {
      folder: "products",
    });
    imageLinks.push({
      public_id: results.public_id,
      url: results.secure_url,
    });
  }
  req.body.images = imageLinks;

  const product = await Product.create(req.body);
  res.send({ success: true, product });
});