import { Repository } from "typeorm";
import { AppDataSource } from "../../infrastructure/db/DataSource";
import { User } from "../entity/User";
import { UserEntity } from "../entity/UserEntity";
import { UserRepository } from "./UserRepository";

export class UserRepositoryImpl implements UserRepository {
    private repository: Repository<UserEntity>;

    constructor() {
        this.repository = AppDataSource.getRepository(UserEntity);
    }

    async createUser(user: User): Promise<User> {
        const userEntity = this.repository.create(user);
        const savedUserEntity = await this.repository.save(userEntity);
        return new User(savedUserEntity);
    }

    async getUserById(id: string): Promise<User | null> {
        const userEntity = await this.repository.findOneBy({ id });
        return userEntity ? new User(userEntity) : null;
    }

    async getUserByEmail(email: string): Promise<User | null> {
        const userEntity = await this.repository.findOneBy({ email });
        return userEntity ? new User(userEntity) : null;
    }
}