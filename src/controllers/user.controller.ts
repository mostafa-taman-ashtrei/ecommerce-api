import { Request, Response } from 'express';
import cookie from 'cookie';
import { LoginUser, registerUser } from '../services/auth.service';
import { LoginUserData, RegisterUserData } from '../types';

export const handleUserRegister = async (req: Request, res: Response) => {
    const {
        firstName,
        lastName,
        email,
        username,
        password,
        confirmPassword,
    } = req.body;

    if (password !== confirmPassword) return res.status(400).json({ e: 'Passwords do not match' });

    const userData: RegisterUserData = {
        firstName,
        lastName,
        email,
        username,
        password,
    };

    const response = await registerUser(userData);

    if (response.e) return res.status(response.status).json({ e: response.e });
    return res.status(response.status).json({ data: response.data });
};

export const handleUserLogin = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const userData: LoginUserData = {
        username,
        password,
    };

    const response = await LoginUser(userData);

    if (response.e) return res.status(response.status).json({ e: response.e });

    if (response.data) {
        res.set('Set-Cookie', cookie.serialize('token', response.data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600, // Expires after one hour
            path: '/',
        }));

        return res.status(response.status).json({ data: response.data.existingUser });
    }
};

export const handleMe = async (_: Request, res: Response) => res.json(res.locals.user);
