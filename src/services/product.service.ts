import ProductModel from '../models/Product';
import { AddProductData } from '../types';

export const getAllProducts = async () => {
    try {
        const products = await ProductModel.find();
        return { status: 200, e: null, data: products };
    } catch (e) {
        console.log(e);
        return { status: 500, e: 'ServerError', data: null };
    }
};

export const addProduct = async (product: AddProductData) => {
    try {
        const newProduct = await ProductModel.create(product);
        console.log(newProduct);

        if (newProduct.errors) return { status: 424, e: newProduct.errors, data: null };
        return { status: 201, e: null, data: newProduct };
    } catch (e) {
        console.log(e);
        return { status: 500, e: 'ServerError', data: null };
    }
};
