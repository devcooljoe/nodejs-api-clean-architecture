import bcrypt from 'bcryptjs';
import { validateDtoOrThrow } from '../../core/utils/validate-dto';
import { User } from "../../domain/entity/User";
import { UserRole } from '../../domain/enums/UserRole';
import { UserRepository } from "../../domain/repository/UserRepository";
import { CreateUserDTO } from "../dto/CreateUserDTO";

export class UserUseCase {

    constructor(private readonly userRepo: UserRepository) { }

    async createUserUseCase(data: any): Promise<User> {
        const userDto = await validateDtoOrThrow(CreateUserDTO, data);
        const isEmailExist = await this.userRepo.getUserByEmail(userDto.email);
        if (isEmailExist != null) throw new Error('This email is already taken!');

        const hashedPassword = await bcrypt.hash(userDto.password, 10);

        const user = new User({ name: userDto.name, email: userDto.email, role: UserRole.ADMIN, password: hashedPassword });

        return await this.userRepo.createUser(user);
    }

    async getUserUseCase(id: string): Promise<User | null> {
        return await this.userRepo.getUserById(id);
    }

    // async loginUseCase(data: any): Promise<User> {
    //     const userDto = await validateDtoOrThrow(UserLoginDTO, data);
    //     const user = await this.userRepo.getUserByEmail(userDto.email);
    //     if (user == null) throw new NotFoundException('User does not exist!');

    //     const isValidPassword = await bcrypt.compare(userDto.password, user.password);
    //     if (!isValidPassword) throw new Error('Invalid password!');
    // }

}
