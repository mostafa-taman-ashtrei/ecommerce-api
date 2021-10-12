import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { addProduct, getAllProducts } from '../services/product.service';
import { AddProductData } from '../types';

export const handleFetchingAllProducts = async (_: Request, res: Response) => {
    const response = await getAllProducts();

    if (response.e) return res.status(response.status).json({ e: response.e });
    return res.status(response.status).json({ data: response.data });
};

export const handleAddProduct = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { title, description, price, quantity } = req.body;

    const productData: AddProductData = {
        title,
        description,
        price,
        quantity,
    };

    const response = await addProduct(productData);

    if (response.e) return res.status(response.status).json({ e: response.e });
    return res.status(response.status).json({ data: response.data });
};
