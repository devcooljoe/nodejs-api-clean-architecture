import { plainToInstance } from "class-transformer";
import { Request, Response } from 'express';
import { CreateUserDTO } from "../../../application/dto/CreateUserDTO";
import { UserUseCase } from "../../../application/usecases/UserUseCase";
import { UserRepositoryImpl } from "../../../domain/repository/UserRepositoryImpl";

export class UserController {
    static register = async (request: Request, response: Response) => {
        try {
            const dto = plainToInstance(CreateUserDTO, request.body);
            const user = await new UserUseCase(new UserRepositoryImpl).createUserUseCase(dto);
            return response.status(201).json({ message: 'User created', user });
        } catch (error) {

        }
    }
}