import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import  User  from "./entity/Usuario";
import  Produto  from "./entity/Produto";
import  Entrada  from "./entity/Entrada";
import Saida from "./entity/Saida";


dotenv.config({ path: __dirname + "/../.env" });


export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Produto, Entrada, Saida],
});

AppDataSource.initialize()
  .then(() => {
    console.log("📌 Conectado ao banco e tabelas criadas!");
  })
  .catch((error) => {
    console.error("Erro ao conectar no banco:", error);
  });