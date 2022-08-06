import mongoose from "mongoose";
const { Schema } = mongoose;

const Product = mongoose.model("Product",  Schema({
    name: {
        type: String,
        required: [true, "name must be given"]
    }

}))
export default Product;