import cors from 'cors';
import dotenv from 'dotenv';
import express from "express";
import "reflect-metadata";
import swaggerUi from 'swagger-ui-express';
import "./interface/http/extensions/express-response.extension";
import { extendResponse } from './interface/http/extensions/response-extension';
import errorHandler from './interface/http/middleware/ErrorMiddleware';
import router from './interface/http/routes/router';
import swaggerDocument from './swagger.json';


dotenv.config();

extendResponse();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(router);

app.get('/', (_req, res) => {
    res.json({ 'message': 'Eldaa API is running' });
});

app.use(errorHandler);

export default app;