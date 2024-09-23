import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import AppConfig from './config/appConfig';

export function Greeting(msg: string = 'world'): string {
    return `Hello ${msg} from ${AppConfig.server.name} on PORT: ${AppConfig.server.port}`;
}

console.log(Greeting());
