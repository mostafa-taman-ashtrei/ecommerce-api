import Router from 'express';
import isAuth from '../middlewares/isAuth';
import registerRouteSchema from '../validation/registerRouteValidation';
import loginRouteSchema from '../validation/loginRouteValidation';
import { handleUserLogout, handleMe, handleUserLogin, handleUserRegister } from '../controllers/user.controller';

const initAuthRoutes = () => {
    const router = Router();
    router.post('/register', registerRouteSchema, handleUserRegister);
    router.post('/login', loginRouteSchema, handleUserLogin);
    router.get('/me', isAuth, handleMe);
    router.get('/logout', isAuth, handleUserLogout);
    return router;
};

export default initAuthRoutes;
