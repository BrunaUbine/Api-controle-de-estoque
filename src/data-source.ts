import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

import { Usuario } from "./entity/Usuario.js";
import { Produto } from "./entity/Produto.js";
import { Entrada } from "./entity/Entrada.js";
import { Saida } from "./entity/Saida.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, "..", ".env"),
});


export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT!),
  username: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  database: process.env.DB_NAME!,
  synchronize: true,
  logging: false,
  entities: [Usuario, Produto, Entrada, Saida],
});
