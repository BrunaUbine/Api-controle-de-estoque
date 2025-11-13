"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const Usuario_1 = __importDefault(require("./entity/Usuario"));
data_source_1.AppDataSource.initialize().then(async () => {
    console.log("Inserting a new user into the database...");
    const user = new Usuario_1.default();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await data_source_1.AppDataSource.manager.save(user);
    console.log("Saved a new user with id: " + user.id);
    console.log("Loading users from the database...");
    const users = await data_source_1.AppDataSource.manager.find(Usuario_1.default);
    console.log("Loaded users: ", users);
    console.log("Here you can setup and run express / fastify / any other framework.");
}).catch(error => console.log(error));
