import Container from "typedi";
import { UserRepository } from "../domain/repository/UserRepository";
import { UserRepositoryImpl } from "../domain/repository/UserRepositoryImpl";

Container.set<UserRepository>('UserRepository', new UserRepositoryImpl());