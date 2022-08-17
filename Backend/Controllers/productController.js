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
  req.body.user = req.user.id;

  const product = await Product.create(req.body);
  res.send({ success: true, product });
});

export const getAllProducts = catchAsyncError(async (req, res, nex) => {
  //searched products ===========================
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const products = await Product.find({ ...keyword });

  if (!products.length) {
    throw { message: "products not found", statusCode: 400 };
  }
  res.status(200).json({
    success: true,
    products,
  });
});
