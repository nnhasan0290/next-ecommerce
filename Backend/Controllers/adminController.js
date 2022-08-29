import {catchAsyncError} from "../middlewars/catchAsyncErrors.js";
import Product from "../Models/productModel.js";
import { v2 as cloudinary } from "cloudinary";
 
export const adminAllProduct = catchAsyncError(async (req,res,nex) => {
   const products = await Product.find();
   res.status(200).json({
    success: true,
    products
   })
})

// Delete product admin
export const deleteProduct = catchAsyncError(async(req,res,nex) => {
   console.log(req.params);
   const product = await Product.findById(req.params.id);
   if(!product){
      throw {message:"product not found",statusCode: 400}
   }
   for(let i = 0; i<product.images.length; i++){
      cloudinary.uploader.destroy(product.images[i].public_id);
   }
   await product.remove();
   res.status(200).json({
      success: true,
      message: "product deleted successfully"
   })
})