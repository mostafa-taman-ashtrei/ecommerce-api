import Router from 'express';
import { handleAddProduct, handleDeltingProducts, handleFetchingAllProducts, handleFetchingProductByID, handleRestoringProducts } from '../controllers/product.controller';
import isAdmin from '../middlewares/isAdmin';
import isAuth from '../middlewares/isAuth';
import addProductRouteSchema from '../validation/addProductRouteValidation';

const initProductRoutes = () => {
    const router = Router();
    router.get('/all', handleFetchingAllProducts);
    router.get('/get/:id', handleFetchingProductByID);
    router.put('/del/:id', isAuth, isAdmin, handleDeltingProducts);
    router.put('/restore/:id', isAuth, isAdmin, handleRestoringProducts);
    router.post('/add', isAuth, isAdmin, addProductRouteSchema, handleAddProduct);
    return router;
};

export default initProductRoutes;
