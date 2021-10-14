import Router from 'express';
import { handleAddProduct, handleFetchingAllProducts, handleFetchingProductByID } from '../controllers/product.controller';
import isAdmin from '../middlewares/isAdmin';
import isAuth from '../middlewares/isAuth';
import addProductRouteSchema from '../validation/addProductRouteValidation';

const initProductRoutes = () => {
    const router = Router();
    router.get('/all', handleFetchingAllProducts);
    router.get('/:id', handleFetchingProductByID);
    router.post('/add', isAuth, isAdmin, addProductRouteSchema, handleAddProduct);
    return router;
};

export default initProductRoutes;
