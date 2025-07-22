import Product from "../modal/product.modal";

import {ProductDTO} from "../dto/product.dto";

export const getAllProducts = async () => {
    return Product.find();
}


export const saveProduct = async (data: ProductDTO) => {
    return await Product.create(data);
}