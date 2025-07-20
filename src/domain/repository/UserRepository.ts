import { User } from "../entity/User";

export interface UserRepository {
    createUser(user: User): Promise<User>;
    getUserById(id: string): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
}