import "express";

declare module "express-serve-static-core" {
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
}

export interface ResponseParam {
    message: string;
    data?: Record<string, any>;
    error?: any;
}
