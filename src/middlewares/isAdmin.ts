import { NextFunction, Request, Response } from 'express';

const isAdmin = async (_: Request, res: Response, next: NextFunction) => {
    try {
        const { user } = res.locals;
        if (!user.isAdmin) throw new Error('You are not an admin');

        return next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({ error: 'You are not an admin' });
    }
};

export default isAdmin;
