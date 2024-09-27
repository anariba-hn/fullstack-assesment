/*
 ** Configuration provider file for sequelize to work with migrations
 */
const config = {
    development: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT || 5432,
        dialect: process.env.DB_DIALECT || 'sqlite'
    },
    //This could match different values for production propose
    production: {}
};

export default config;
