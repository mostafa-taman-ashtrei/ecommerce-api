import { Schema, model, Model } from 'mongoose';
import { UserType } from '../types';
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

const UserSchema = new Schema({
    firstName: generateTypes(String, false, true, true, false, null, 30, 2),
    lastName: generateTypes(String, false, true, true, false, null, 30, 2),
    username: generateTypes(String, true, true, true, false, null, 30, 2),
    email: generateTypes(String, true, true, true, false, null, 30, 2),
    password: generateTypes(String, false, true, true, false, null, 100, 8),
    isAdmin: generateTypes(Boolean, false, true, false, true, false, 0, 0),
    cart: generateTypes(Array, false, false, false, true, [], 0, 0),
}, { timestamps: true });

const UserModel: Model<UserType> = model('users', UserSchema);
export default UserModel;
