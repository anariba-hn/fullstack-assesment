import dotenv from 'dotenv';
import path from 'node:path';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import AppConfig from './config/appConfig';
import { Server } from 'node:net';
import initApp from './app';
import dbConnection from './config/dbConnection';

async function initServer(config: typeof AppConfig.server): Promise<Server> {
    try {
        await dbConnection.sync({ force: false });
        const app = initApp();
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
