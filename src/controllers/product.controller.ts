import {Request, Response} from 'express';
import * as productService from '../services/product.service';

export const saveProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;
        const savedProduct = await productService.saveProduct(productData);
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({error: 'Error saving product'});
    }
}