import cors from 'cors';
import dotenv from 'dotenv';
import express from "express";
import "reflect-metadata";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/', (_req, res) => {
    res.json({ 'message': 'Eldaa API is running' });
});

export default app;