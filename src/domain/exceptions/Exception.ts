import { BaseException } from "./BaseException";

export class BadRequestException extends BaseException { }
export class NotFoundException extends BaseException { }
export class UnauthorizedException extends BaseException { }
export class ForbiddenException extends BaseException { }
export class InternalServerException extends BaseException { }
export class TooManyRequestException extends BaseException { }
export class UnprocessableEntityException extends BaseException { }

