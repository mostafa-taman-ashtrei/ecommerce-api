import Router from 'express';
import { handleAddProduct, handleFetchingAllProducts } from '../controllers/product.controller';
import isAuth from '../middlewares/isAuth';

const initProductRoutes = () => {
    const router = Router();
    router.get('/all', handleFetchingAllProducts);
    router.post('/add', isAuth, handleAddProduct);
    return router;
};

export default initProductRoutes;
