import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserLoginDTO {
    @IsEmail()
    email!: string;
    @IsNotEmpty()
    @IsString()
    password!: string;
}
