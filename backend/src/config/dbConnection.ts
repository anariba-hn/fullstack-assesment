import { Sequelize, Dialect } from 'sequelize';
import appConfig from './appConfig';

export const dbConnection = new Sequelize({
    host: appConfig.db.host,
    database: appConfig.db.database,
    username: appConfig.db.username,
    password: appConfig.db.password,
    port: appConfig.db.port,
    dialect: appConfig.db.dialect as Dialect,
    storage: ':memory:'
});
