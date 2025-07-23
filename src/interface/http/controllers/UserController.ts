import { instanceToPlain } from "class-transformer";
import { Request, Response } from 'express';
import { CreateUserDTO } from "../../../application/dto/CreateUserDTO";
import { UserUseCase } from "../../../application/usecases/UserUseCase";
import { validateDtoOrThrow } from "../../../core/utils/validate-dto";
import { UserRepository } from "../../../domain/repository/UserRepository";
import { UserRepositoryImpl } from "../../../domain/repository/UserRepositoryImpl";
import { UserResource } from "../resources/UserResource";

export class UserController {
    static async register(request: Request, response: Response) {
        const dto = await validateDtoOrThrow(CreateUserDTO, request.body);
        const repo: UserRepository = new UserRepositoryImpl();
        const useCase = new UserUseCase(repo);
        const user = await useCase.createUserUseCase(dto);
        const userResponse = instanceToPlain(new UserResource(user));
        return response.isOk({ message: 'Registration successful', data: userResponse });
    }
    static async login(request: Request, response: Response) {
        // const dto = await validate
    }
}