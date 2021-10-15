import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { BAD_REQUEST_STATUS, DELETE_ACTION, RESTORE_ACTION } from '../constants';
import { addProduct, deleteAndRestoreProductById, getAllProducts, getProductById, updateProduct } from '../services/product.service';
import { AddProductData } from '../types';

export const handleFetchingAllProducts = async (_: Request, res: Response) => {
    const response = await getAllProducts();

    if (response.e) return res.status(response.status).json({ e: response.e });
    return res.status(response.status).json({ data: response.data });
};

export const handleAddProduct = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(BAD_REQUEST_STATUS).json({ errors: errors.array() });

    const { title, description, price, quantity } = req.body;

    const productsData: AddProductData = {
        title,
        description,
        price,
        quantity,
    };

    const response = await addProduct(productsData);

    if (response.e) return res.status(response.status).json({ e: response.e });
    return res.status(response.status).json({ data: response.data });
};

export const handleFetchingProductByID = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (String(id).length !== 24) return res.status(BAD_REQUEST_STATUS).json({ e: 'Invalid Id' });
    const response = await getProductById(String(id));

    if (response.e) return res.status(response.status).json({ e: response.e });
    return res.status(response.status).json({ data: response.data });
};

export const handleDeltingProducts = async (req: Request, res: Response) => {
    const { id, action } = req.params;

    if (String(action) !== DELETE_ACTION && String(action) !== RESTORE_ACTION) return res.status(BAD_REQUEST_STATUS).json({ e: 'Invalid action' });
    if (String(id).length !== 24) return res.status(BAD_REQUEST_STATUS).json({ e: 'Invalid Id' });

    const response = await deleteAndRestoreProductById(id, action);

    if (response.e) return res.status(response.status).json({ e: response.e });
    return res.status(response.status).json({ data: response.data });
};

export const handleUpdatingProduct = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(BAD_REQUEST_STATUS).json({ errors: errors.array() });

    const { id } = req.params;
    const { title, description, price, quantity } = req.body;

    if (String(id).length !== 24) return res.status(BAD_REQUEST_STATUS).json({ e: 'Invalid Id' });

    const newProductData: AddProductData = {
        title,
        description,
        price,
        quantity,
    };

    const response = await updateProduct(id, newProductData);

    if (response.e) return res.status(response.status).json({ e: response.e });
    return res.status(response.status).json({ data: response.data });
};
