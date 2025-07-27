import { instanceToPlain } from "class-transformer";
import { Request, Response } from 'express';
import Container from "typedi";
import { CreateUserDTO } from "../../../application/dto/CreateUserDTO";
import { UserUseCase } from "../../../application/usecases/UserUseCase";
import { validateDtoOrThrow } from "../../../core/utils/validate-dto";
import { UserResource } from "../resources/UserResource";

export const UserController = {
    async register(request: Request, response: Response) {
        const dto = await validateDtoOrThrow(CreateUserDTO, request.body);
        const useCase = Container.get(UserUseCase);
        const user = await useCase.createUserUseCase(dto);
        const userResponse = instanceToPlain(new UserResource(user));
        return response.isOk({ message: 'Registration successful', data: userResponse });
    },
    async login(request: Request, response: Response) {
        // const dto = await validate;
    }
}