export class BaseError extends Error {
    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;

        Error.captureStackTrace(this, this.constructor);
    }
}
