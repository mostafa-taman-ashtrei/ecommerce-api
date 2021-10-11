import express from 'express';
import { config } from 'dotenv';
import fs from 'fs';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import path from 'path';
import { connect } from 'mongoose';
import initRoutes from './routes/initRoutes';

(async () => {
    config();
    await connect(process.env.MONGO_URI!);

    const app = express();
    const port = process.env.PORT || 8080;

    app.use(helmet());
    app.use(cookieParser());
    app.use(express.json());
    app.use(morgan('dev'));

    // save logs to access.log in production
    if (process.env.NODE_ENV === 'production') {
        const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
        app.use(morgan('combined', { stream: accessLogStream }));
    }

    initRoutes(app);

    app.listen(port, () => console.log(`server is running on https://localhost${port}/`));
})();
