import Router, { Express } from 'express';
import initAuthRoutes from './auth.routes';

const router = Router();

const initRoutes = (app: Express) => {
    router.get('/', (_, res) => res.json({ msg: 'Hi there' }));
    router.use('/auth', initAuthRoutes());
    return app.use(router);
};

export default initRoutes;
