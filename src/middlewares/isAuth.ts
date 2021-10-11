import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import UserModel from '../models/User';

const isAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { token } = req.cookies;
        if (!token) throw new Error('Unauthenticated');

        const { username }: any = verify(token, process.env.JWT_SECRET!);

        const user = await UserModel.findOne({ username });
        if (!user) throw new Error('Unauthenticated');

        res.locals.user = user;
        return next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({ error: 'Unauthenticated' });
    }
};

export default isAuth;
