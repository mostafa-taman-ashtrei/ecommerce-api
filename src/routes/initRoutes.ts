import Router, { Express } from 'express';

const router = Router();

const initRoutes = (app: Express) => {
    router.get('/', (_, res) => res.json({ msg: 'Hi there' }));
    return app.use(router);
};

export default initRoutes;
