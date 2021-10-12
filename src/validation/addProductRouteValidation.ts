import { checkSchema } from 'express-validator';

const addProductRouteSchema = checkSchema({
    title: {
        isString: { errorMessage: 'title must be a string' },
        notEmpty: { errorMessage: 'title must not be empty' },
    },
    description: {
        isString: { errorMessage: 'description must be a string' },
        notEmpty: { errorMessage: 'description must not be empty' },
    },
    price: {
        notEmpty: { errorMessage: 'price must not be empty' },
        isNumeric: { errorMessage: 'price must be a number' },
    },
    quantity: {
        notEmpty: { errorMessage: 'quantity must not be empty' },
        isNumeric: { errorMessage: 'quantity must be a number' },
    },
});

export default addProductRouteSchema;
