import dotenv from 'dotenv';
dotenv.config();

const env = {
    HOST: process.env.DB_HOST,
    PORT: parseInt(process.env.PORT ?? '8000'),
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: parseInt(process.env.DB_PORT ?? '3306'),
};

export default env;
