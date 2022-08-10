import mongoose from "mongoose";
const { Schema } = mongoose;

const Product = mongoose.model(
  "Product",
  Schema({
    name: {
      type: String,
      required: [true, "name is required here"],
      trim: true,
    },
    stock: {
      type: Number,
      required: [true, "stock is required field"],
      maxLength: [4, "stock cannot exceed 4 character"],
      default: 1,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    description: {
      type: String,
      required: [true, "please enter the product description"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    category: {
      type: String,
      required: [true, "category is a required field"],
    },
  })
);

export default Product;
