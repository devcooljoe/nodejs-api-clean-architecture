import { DataSource } from "typeorm";
import { UserEntity } from "../../domain/entity/UserEntity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? "3306"),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [UserEntity],
    migrations: [],
    subscribers: [],
});