import { v2 as cloudinary } from "cloudinary";
import { catchAsyncError } from "../middlewars/catchAsyncErrors.js";
import ApiFeature from "../utils/apiFeature.js";
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
  const resultPerPage = 6;
  const apiFeature = new ApiFeature(Product.find(), req.query).search().filter().sort().categorize();
  const filtered_products = await apiFeature.products;
  const total_products = filtered_products.length;
  await apiFeature.pagination(resultPerPage)
  const products = await apiFeature.products.clone();

  if(!products.length){
    throw {message:"product not found", statusCode: 400};
  }
  res.status(200).json({
    success: true,
    products,
    total_products
  });
});
