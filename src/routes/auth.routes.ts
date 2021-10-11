import Router from 'express';
import isAuth from '../middlewares/isAuth';
import {
    handleLogout, handleMe, handleUserLogin, handleUserRegister,
} from '../controllers/user.controller';

const initAuthRoutes = () => {
    const router = Router();
    router.post('/register', handleUserRegister);
    router.post('/login', handleUserLogin);
    router.get('/me', isAuth, handleMe);
    router.get('/logout', isAuth, handleLogout);
    return router;
};

export default initAuthRoutes;
