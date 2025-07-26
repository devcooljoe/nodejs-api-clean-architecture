import cors from 'cors';
import dotenv from 'dotenv';
import express from "express";
import expressWinston from 'express-winston';
import "reflect-metadata";
import "./interface/http/extensions/express-response.extension";
import { extendResponse } from './interface/http/extensions/response-extension';
import errorHandler from './interface/http/middleware/ErrorMiddleware';
import router from './interface/http/routes/router';
import logger from './logger';

dotenv.config();

extendResponse();

const app = express();

app.use(cors());

app.use(express.json());

app.use(expressWinston.logger({
    winstonInstance: logger,
    statusLevels: true,
    meta: true,
    msg: (req, res) => {
        return `HTTP ${req.method} ${req.originalUrl} [${res.statusCode}]`;
    },
}));
app.use(router);
app.use(errorHandler);

export default app;