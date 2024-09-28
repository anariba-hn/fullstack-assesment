import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize';
import appConfig from './appConfig';
import { Employee } from '../models/Employee';
import { Department } from '../models/Department';

const dbConnection = new Sequelize({
    host: appConfig.db.host,
    database: appConfig.db.database,
    username: appConfig.db.username,
    password: appConfig.db.password,
    port: appConfig.db.port,
    dialect: appConfig.db.dialect as Dialect
    // logging: false  /* to disable database logs */
});

dbConnection.addModels([Employee, Department]);

export default dbConnection;
