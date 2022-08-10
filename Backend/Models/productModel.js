import mongoose from "mongoose";
const { Schema } = mongoose;

const Product = mongoose.model(
  "Product",
  Schema({
    title: {
      type: String,
      required: [true, "name is required here"],
    },
  })
);

export default Product;
