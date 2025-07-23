import { NextFunction, Request, Response } from "express";
import { BadRequestException, ForbiddenException, InternalServerException, NotFoundException, TooManyRequestException, UnauthorizedException, UnprocessableEntityException } from "../../../domain/exceptions/Exception";

export default function errorHandler(err: any, req: Request, res: Response, __: NextFunction) {
    if (err instanceof BadRequestException) {
        return res.isBadRequest({ message: err.message });
    }
    if (err instanceof NotFoundException) {
        return res.isNotFound({ message: err.message });
    }
    if (err instanceof UnauthorizedException) {
        return res.isUnathorized({ message: err.message });
    }
    if (err instanceof ForbiddenException) {
        return res.isForbidden({ message: err.message });
    }
    if (err instanceof InternalServerException) {
        return res.isServerError({ message: err.message });
    }
    if (err instanceof TooManyRequestException) {
        return res.isTooManyRequest({ message: err.message });
    }
    if (err instanceof UnprocessableEntityException) {
        return res.isUnprocessableEntity({ message: err.message });
    }

    return res.isServerError({ message: req.body, error: err.stack });
}
