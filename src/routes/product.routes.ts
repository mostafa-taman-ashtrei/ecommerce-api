import Router from 'express';
import { handleAddProduct, handleFetchingAllProducts } from '../controllers/product.controller';
import isAuth from '../middlewares/isAuth';
import addProductRouteSchema from '../validation/addProductRouteValidation';

const initProductRoutes = () => {
    const router = Router();
    router.get('/all', handleFetchingAllProducts);
    router.post('/add', isAuth, addProductRouteSchema, handleAddProduct);
    return router;
};

export default initProductRoutes;
