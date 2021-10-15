import { NextFunction, Request, Response } from 'express';
import { FORBIDDEN_STATUS } from '../constants';

const isAdmin = async (_: Request, res: Response, next: NextFunction) => {
    try {
        const { user } = res.locals;
        if (!user.isAdmin) throw new Error('You are not an admin');

        return next();
    } catch (err) {
        console.log(err);
        return res.status(FORBIDDEN_STATUS).json({ error: 'You are not an admin' });
    }
};

export default isAdmin;
