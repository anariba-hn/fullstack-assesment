import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import AppConfig from './config/appConfig';
import { Server } from 'net';
import express from 'express';
import dbConnection from './config/dbConnection';

async function initServer(config: typeof AppConfig.server): Promise<Server> {
    try {
        await dbConnection.authenticate();
        const app = express();
        console.log('Connection has been established successfully.');
        return app.listen(config.port, () =>
            console.log(`Alive on PORT: ${config.port}`)
        );
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}

initServer(AppConfig.server);
