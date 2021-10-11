import { Request, Response } from 'express';
import { registerUser } from '../services/auth.service';
import { UserType } from '../types';

export const handleRegisterUser = async (req: Request, res: Response) => {
    const {
        firstName,
        lastName,
        email,
        username,
        password,
        confirmPassword,
    } = req.body;

    if (password !== confirmPassword) return res.status(400).json({ e: 'Passwords do not match' });

    const userData: UserType = {
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
