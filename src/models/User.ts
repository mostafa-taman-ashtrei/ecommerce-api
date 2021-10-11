import { Schema, model, Model } from 'mongoose';
import { UserType } from '../types';
import generateTypes from './generateType';

const UserSchema = new Schema({
    firstName: generateTypes(String, false, true, false, null, 30, 2),
    lastName: generateTypes(String, false, true, false, null, 30, 2),
    username: generateTypes(String, true, true, false, null, 30, 2),
    email: generateTypes(String, true, true, false, null, 30, 2),
    password: generateTypes(String, false, true, false, null, 100, 8),
}, { timestamps: true });

const UserModel: Model<UserType> = model('users', UserSchema);
export default UserModel;
