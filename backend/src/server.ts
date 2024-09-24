import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import AppConfig from './config/appConfig';
import { Server } from 'net';
import express from 'express';

function initServer(config: typeof AppConfig.server): Server {
    const app = express();
    return app.listen(config.port, () => console.log(`Alive on PORT: ${config.port}`));
}

initServer(AppConfig.server);
