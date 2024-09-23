const AppConfig = {
    server: {
        name: process.env.SERVER_NAME,
        port: parseInt(<string>process.env.SERVER_PORT, 10) || 3000,
        host: process.env.SERVER_HOST
    }
};

export default Object.freeze(AppConfig);
