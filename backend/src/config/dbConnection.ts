import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import appConfig from './appConfig';

const dbConnection = new Sequelize({
    host: appConfig.db.host,
    database: appConfig.db.database,
    username: appConfig.db.username,
    password: appConfig.db.password,
    port: appConfig.db.port,
    dialect: appConfig.db.dialect as Dialect,
    storage: ':memory:',
    models: [__dirname + '/models']
});

export default dbConnection;
