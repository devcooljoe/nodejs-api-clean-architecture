import { UserRole } from "../enums/UserRole";
import { UserEntity } from "./UserEntity";

export class User {
    readonly id?: string;
    readonly name: string;
    readonly email: string;
    readonly role: UserRole;
    readonly password: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt?: Date;

    private constructor(props: User) {
        this.id = props.id;
        this.name = props.name;
        this.email = props.email;
        this.role = props.role;
        this.password = props.password;
        this.createdAt = props.createdAt ?? new Date();
        this.updatedAt = props.updatedAt ?? new Date();
        this.deletedAt = props.deletedAt;
    }

    static fromEntity(entity: UserEntity): User {
        return new User({
            id: entity.id,
            name: entity.name,
            email: entity.email,
            role: entity.role,
            password: entity.password,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            deletedAt: entity.deletedAt,
        });
    }
}
