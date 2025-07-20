import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    "title": {
        type: String,
        required: true,
        trim: true,
    },
    "author": {
        type: String,
        required: true,
        trim: true,
    },
    "description": {
        type: String,
        required: false,
        trim: true,
    },
    "coverImage": {
        type: String,
        required: false,
    }
})

const Product = mongoose.model('product', productModel);
export default Product;