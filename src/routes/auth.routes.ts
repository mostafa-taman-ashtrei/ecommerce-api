import Router from 'express';
import { handleRegisterUser } from '../controllers/user.controller';

const initAuthRoutes = () => {
    const router = Router();
    router.post('/register', handleRegisterUser);
    return router;
};

export default initAuthRoutes;
