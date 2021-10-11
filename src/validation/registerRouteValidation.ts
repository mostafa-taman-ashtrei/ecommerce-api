import { checkSchema } from 'express-validator';

const registerRouteSchema = checkSchema({
    firstName: {
        isString: { errorMessage: 'First name must be a string' },
        notEmpty: { errorMessage: 'First name must not be empty' },
    },
    lastName: {
        isString: { errorMessage: 'last name must be a string' },
        notEmpty: { errorMessage: 'last name must not be empty' },
    },
    username: {
        isString: { errorMessage: 'username must be a string' },
        notEmpty: { errorMessage: 'username must not be empty' },
    },
    email: {
        isEmail: { errorMessage: 'email must be an email' },
        notEmpty: { errorMessage: 'email must not be empty' },
    },
    password: {
        notEmpty: { errorMessage: 'password must not be empty' },
        isLength: {
            errorMessage: 'password should be at least 7 chars long',
            options: { min: 8 },
        },
    },
    confirmPassword: {
        notEmpty: { errorMessage: 'confirmPassword must not be empty' },
    },
});

export default registerRouteSchema;
