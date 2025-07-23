import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { UnprocessableEntityException } from '../../domain/exceptions/Exception';

export async function validateDtoOrThrow<T extends object>(
    cls: new () => T,
    data: any
): Promise<T> {
    const instance = plainToInstance(cls, data);
    const errors = await validate(instance);

    if (errors.length > 0) {
        const errorMessages = errors.flatMap(err =>
            Object.values(err.constraints || {})
        );
        throw new UnprocessableEntityException(errorMessages.join(', '));
    }

    return instance;
}
