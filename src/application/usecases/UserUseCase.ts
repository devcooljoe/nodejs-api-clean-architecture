import bcrypt from 'bcryptjs';
import { validate } from "class-validator";
import { User } from "../../domain/entity/User";
import { UserRepository } from "../../domain/repository/UserRepository";
import { CreateUserDTO } from "../dto/CreateUserDTO";

export class UserUseCase {

    constructor(private readonly userRepo: UserRepository) { }

    async createUserUseCase(userDto: CreateUserDTO): Promise<User> {
        const errors = await validate(userDto);
        if (errors.length > 0) {
            const errorMessages = errors.flatMap(err =>
                Object.values(err.constraints || {})
            );
            throw new Error(errorMessages.join('\n'));
        }

        const isEmailExist = await this.userRepo.getUserByEmail(userDto.email);
        if (isEmailExist != null) throw new Error('This email is already taken!');

        const hashedPassword = await bcrypt.hash(userDto.password, 10);

        const user = new User({ name: userDto.name, email: userDto.email, password: hashedPassword });
        return await this.userRepo.createUser(user);
    }

    async getUserUseCase(id: string): Promise<User | null> {
        return await this.userRepo.getUserById(id);
    }

}
