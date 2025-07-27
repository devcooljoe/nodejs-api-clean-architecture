import { NextFunction, Request, Response } from 'express';
import {
    BadRequestError,
    ForbiddenError,
    InternalServerError,
    NotFoundError,
    TooManyRequestError,
    UnauthorizedError,
    UnprocessableEntityError,
} from '../../../domain/errors/Error';
import logger from '../../../logger';

export default function errorHandler(
    err: any,
    req: Request,
    res: Response,
    __: NextFunction,
) {
    logger.error({
        message: err.message,
        stack: err.stack,
        route: req.originalUrl,
        method: req.method,
        body: req.body,
    });

    if (err instanceof BadRequestError) {
        return res.isBadRequest({ message: err.message });
    }
    if (err instanceof NotFoundError) {
        return res.isNotFound({ message: err.message });
    }
    if (err instanceof UnauthorizedError) {
        return res.isUnathorized({ message: err.message });
    }
    if (err instanceof ForbiddenError) {
        return res.isForbidden({ message: err.message });
    }
    if (err instanceof InternalServerError) {
        return res.isServerError({ message: err.message });
    }
    if (err instanceof TooManyRequestError) {
        return res.isTooManyRequest({ message: err.message });
    }
    if (err instanceof UnprocessableEntityError) {
        return res.isUnprocessableEntity({ message: err.message });
    }

    return res.isServerError({ message: err.message, error: err.stack });
}
