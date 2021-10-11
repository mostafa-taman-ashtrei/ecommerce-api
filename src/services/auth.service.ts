import { hash } from 'bcrypt';
import { UserType } from '../types';
import UserModel from '../models/User';

export const registerUser = async (userData: UserType) => {
    const {
        firstName, lastName, username, email, password,
    } = userData;

    try {
        const hashedPwd = await hash(password, 12);

        const newUser = await UserModel.create({
            firstName,
            lastName,
            username,
            email,
            password: hashedPwd,
        });

        return { status: 200, data: newUser, e: null };
    } catch (e) {
        console.log(e);

        if (e.code === 11000) return { status: 500, e: `Duplicate Value ${Object.keys(e.keyValue)}` };
        return { status: 500, e: 'ServerError' };
    }
};
