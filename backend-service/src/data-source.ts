import "reflect-metadata";
import { DataSource } from "typeorm";
import { videojuegosmoviles } from "./entities/videojuegosmoviles";


export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [videojuegosmoviles],
  migrations:[],
  subscribers:[]
});