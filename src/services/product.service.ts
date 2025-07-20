import Product from "../modal/product.modal";

import {ProductDTO} from "../dto/product.dto";


export const saveProduct = async (data: ProductDTO) => {
    return await Product.create(data);
}