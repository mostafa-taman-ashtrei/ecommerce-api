import { checkSchema } from 'express-validator';

const loginRouteSchema = checkSchema({
    username: {
        isString: { errorMessage: 'username must be a string' },
        notEmpty: { errorMessage: 'username must not be empty' },
    },
    password: {
        notEmpty: { errorMessage: 'password must not be empty' },
        isLength: {
            errorMessage: 'password should be at least 7 chars long',
            options: { min: 8 },
        },
    },
});

export default loginRouteSchema;
