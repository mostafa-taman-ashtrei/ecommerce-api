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

export const getProductById = async (id: string) => {
    try {
        const product = await ProductModel.findById({ _id: id });
        console.log(product);

        if (product === null) return { status: 404, e: 'Product not found!', data: null };
        if (product.errors) return { status: 424, e: product.errors, data: null };
        return { status: 201, e: null, data: product };
    } catch (e) {
        console.log(e);
        return { status: 500, e: 'ServerError', data: null };
    }
};

export const deleteAndRestoreProductById = async (id: string, action: string) => {
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            { _id: id },
            {
                deteted_at: action === 'delete' ? new Date() : null,
                is_deleted: action === 'delete',
            },
        );

        if (updatedProduct?.errors) return { status: 424, e: updatedProduct.errors, data: null };
        return { status: 201, e: null, data: `Product ${id} has been ${action}ed successfully` };
    } catch (e) {
        console.log(e);
        return { status: 500, e: 'ServerError', data: null };
    }
};
