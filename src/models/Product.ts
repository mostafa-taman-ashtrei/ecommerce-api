import { Schema, model, Model } from 'mongoose';
import { ProductType } from '../types';
import generateTypes from './generateType';

/*
type: StringConstructor | NumberConstructor | BooleanConstructor,
isUnique: boolean,
isRequired: boolean,
setMinMax: boolean,
setDefault: boolean,
defaultValue: any,
maxlength: number,
minlength: number
*/

const ProductSchema = new Schema({
    title: generateTypes(String, false, true, true, false, null, 30, 2),
    description: generateTypes(String, false, true, true, false, null, 150, 10),
    price: generateTypes(Number, false, true, false, true, 0.1, 0, 0),
    quantity: generateTypes(Number, false, true, false, true, 1, 0, 0),
    is_deleted: generateTypes(Boolean, false, false, false, true, false, 0, 0),
    deteted_at: generateTypes(Date, false, false, false, false, false, 0, 0),
}, { timestamps: true });

const ProductModel: Model<ProductType> = model('products', ProductSchema);
export default ProductModel;
