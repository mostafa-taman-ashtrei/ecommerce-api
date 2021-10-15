import Router from 'express';
import {
    handleAddProduct, handleDeltingProducts, handleFetchingAllProducts,
    handleFetchingProductByID, handleUpdatingProduct,
} from '../controllers/product.controller';
import isAdmin from '../middlewares/isAdmin';
import isAuth from '../middlewares/isAuth';
import addProductRouteSchema from '../validation/addProductRouteValidation';

const initProductRoutes = () => {
    const router = Router();
    router.get('/', handleFetchingAllProducts);
    router.post('/add', isAuth, isAdmin, addProductRouteSchema, handleAddProduct);
    router.get('/:id', handleFetchingProductByID);
    router.put('/update/:id', isAuth, isAdmin, addProductRouteSchema, handleUpdatingProduct);
    router.put('/:action/:id', isAuth, isAdmin, handleDeltingProducts);
    return router;
};

export default initProductRoutes;
