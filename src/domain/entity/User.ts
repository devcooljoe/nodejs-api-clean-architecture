export class User {
    readonly id?: string;
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly createdAt: Date;

    constructor(props: UserProps) {
        this.id = props.id;
        this.name = props.name;
        this.email = props.email;
        this.password = props.password;
        this.createdAt = props.createdAt ?? new Date();
    }
}

interface UserProps {
    id?: string;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
}