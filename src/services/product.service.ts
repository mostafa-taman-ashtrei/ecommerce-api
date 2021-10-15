import ProductModel from '../models/Product';
import { AddProductData } from '../types';
import { CREATED_STATUS, DB_ERROR_STATUS, NOT_FOUND_STATUS, SERVER_ERROR_STATUS, SUCCESS_STATUS } from '../constants';

export const getAllProducts = async () => {
    try {
        const products = await ProductModel.find();
        return { status: SUCCESS_STATUS, e: null, data: products };
    } catch (e) {
        console.log(e);
        return { status: SERVER_ERROR_STATUS, e: 'ServerError', data: null };
    }
};

export const addProduct = async (product: AddProductData) => {
    try {
        const newProduct = await ProductModel.create(product);
        console.log(newProduct);

        if (newProduct.errors) return { status: DB_ERROR_STATUS, e: newProduct.errors, data: null };
        return { status: CREATED_STATUS, e: null, data: newProduct };
    } catch (e) {
        console.log(e);
        return { status: SERVER_ERROR_STATUS, e: 'ServerError', data: null };
    }
};

export const getProductById = async (id: string) => {
    try {
        const product = await ProductModel.findById({ _id: id });
        console.log(product);

        if (product === null) return { status: NOT_FOUND_STATUS, e: 'Product not found!', data: null };
        if (product.errors) return { status: DB_ERROR_STATUS, e: product.errors, data: null };
        return { status: SUCCESS_STATUS, e: null, data: product };
    } catch (e) {
        console.log(e);
        return { status: SERVER_ERROR_STATUS, e: 'ServerError', data: null };
    }
};

export const deleteAndRestoreProductById = async (id: string, action: string) => {
    try {
        const updatedProduct = await ProductModel.findOneAndUpdate(
            { _id: id },
            {
                deteted_at: action === 'delete' ? new Date() : null,
                is_deleted: action === 'delete',
            },
            {
                new: true,
                runValidators: true,
            },
        );

        if (updatedProduct?.errors) return { status: DB_ERROR_STATUS, e: updatedProduct.errors, data: null };
        return { status: SUCCESS_STATUS, e: null, data: `Product ${id} has been ${action}ed successfully` };
    } catch (e) {
        console.log(e);
        return { status: SERVER_ERROR_STATUS, e: 'ServerError', data: null };
    }
};

export const updateProduct = async (id: string, newProduct: AddProductData) => {
    try {
        const updatedProduct = await ProductModel.findOneAndUpdate(
            { _id: id },
            {
                ...newProduct,
            },
            {
                new: true,
                runValidators: true,
            },
        );

        console.log(updatedProduct);

        if (updatedProduct?.errors) return { status: DB_ERROR_STATUS, e: updatedProduct.errors, data: null };
        return { status: SUCCESS_STATUS, e: null, data: updatedProduct };
    } catch (e) {
        console.log(e);
        return { status: SERVER_ERROR_STATUS, e: 'ServerError', data: null };
    }
};
