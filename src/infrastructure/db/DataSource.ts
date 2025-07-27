import { DataSource } from "typeorm";
import env from "../../config/env";
import { UserEntity } from "../../domain/entity/UserEntity";

export const appDataSource = new DataSource({
  type: "mysql",
  host: env.HOST,
  port: env.DB_PORT,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [UserEntity],
  migrations: [],
  subscribers: [],
});
