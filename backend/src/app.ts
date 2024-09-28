import express from 'express';
import { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './routes';

const environment = process.env.NODE_ENV?.toString();

function initApp(): Application {
    const app = express();
    const corsOptions = {
        origin: '*',
        credentials: false
    };

    app.use(cors(corsOptions));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    if (environment?.includes('dev' || 'development')) app.use(morgan('dev'));

    app.get('/health-check', (_req, res) => {
        res.status(200).json({
            message: 'healthy'
        });
    });
    app.use('/api', routes);

    return app;
}

export default initApp;
