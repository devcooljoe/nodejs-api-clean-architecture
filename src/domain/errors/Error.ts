import { BaseError } from './BaseError';

export class BadRequestError extends BaseError {}
export class NotFoundError extends BaseError {}
export class UnauthorizedError extends BaseError {}
export class ForbiddenError extends BaseError {}
export class InternalServerError extends BaseError {}
export class TooManyRequestError extends BaseError {}
export class UnprocessableEntityError extends BaseError {}
