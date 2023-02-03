import { DataSource } from "typeorm"
import { User } from "./entity/User"
require('dotenv').config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: process.env.DB_PASSWORD,
    database: "userdb",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})