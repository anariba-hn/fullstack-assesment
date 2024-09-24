const AppConfig = {
    server: {
        name: process.env.SERVER_NAME,
        port: parseInt(<string>process.env.SERVER_PORT, 10) || 3000,
        host: process.env.SERVER_HOST
    },
    db: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: parseInt(<string>process.env.DB_PORT, 10) || 5432,
        dialect: process.env.DB_DIALECT || 'sqlite'
    }
};

export default Object.freeze(AppConfig);
