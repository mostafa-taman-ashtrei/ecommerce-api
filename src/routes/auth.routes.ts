import Router from 'express';
import { handleMe, handleUserLogin, handleUserRegister } from '../controllers/user.controller';
import isAuth from '../middlewares/isAuth';

const initAuthRoutes = () => {
    const router = Router();
    router.post('/register', handleUserRegister);
    router.post('/login', handleUserLogin);
    router.get('/me', isAuth, handleMe);
    router.get('/p', isAuth, (_, res) => res.json({ msg: 'U R authenticated' }));
    return router;
};

export default initAuthRoutes;
