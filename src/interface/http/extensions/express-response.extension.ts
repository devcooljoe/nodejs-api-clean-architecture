import 'express';
import { User } from '../../../domain/entity/User';

declare global {
    namespace Express {
        interface Response {
            isOk(param: ResponseParam): this;
            isCreated(param: ResponseParam): this;
            isBadRequest(param: ResponseParam): this;
            isUnathorized(param: ResponseParam): this;
            isForbidden(param: ResponseParam): this;
            isNotFound(param: ResponseParam): this;
            isServerError(param: ResponseParam): this;
            isTooManyRequest(param: ResponseParam): this;
            isUnprocessableEntity(param: ResponseParam): this;
        }
        interface Request {
            user: User;
        }
    }
}

export interface ResponseParam {
    message: string;
    data?: Record<string, any>;
    error?: any;
}
