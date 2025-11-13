"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const Usuario_1 = __importDefault(require("./entity/Usuario"));
const Produto_1 = __importDefault(require("./entity/Produto"));
const Entrada_1 = __importDefault(require("./entity/Entrada"));
const Saida_1 = __importDefault(require("./entity/Saida"));
dotenv_1.default.config({ path: __dirname + "/../.env" });
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Usuario_1.default, Produto_1.default, Entrada_1.default, Saida_1.default],
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("📌 Conectado ao banco e tabelas criadas!");
})
    .catch((error) => {
    console.error("Erro ao conectar no banco:", error);
});
