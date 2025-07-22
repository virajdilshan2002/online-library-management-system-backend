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

export const saveProductImage = async (req: Request, res: Response) => {
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    console.log("Uploaded file:", req.file);

    res.status(200).json({
        message: "Image uploaded successfully",
        fileName: req.file.filename,
    });
};

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error: 'Error fetching products'});
    }
}
