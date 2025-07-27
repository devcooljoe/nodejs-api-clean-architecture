import { Exclude, Expose, Transform } from 'class-transformer';
import { User } from '../../../domain/entity/User';

export class UserResource {
    @Expose()
    id!: string;

    @Expose()
    name!: string;

    @Expose()
    email!: string;

    @Exclude()
    password!: string;

    @Expose()
    @Transform(({ value }) => value.toISOString(), { toPlainOnly: true })
    createdAt!: Date;

    constructor(user: User) {
        Object.assign(this, user);
    }
}
