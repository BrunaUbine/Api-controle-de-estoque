import { AppDataSource } from "../data-source.js";
import { Usuario } from "../entity/Usuario.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

export class AuthController {
    static async registrar(req: Request, res: Response) {
        const repo = AppDataSource.getRepository(Usuario);
        const { username, password } = req.body;

        const existente = await repo.findOneBy({ username });
        if (existente) {
            return res.status(400).json({ mensagem: "Usuário já existente" });
        }

        const novo = repo.create({ username, password });
        await repo.save(novo);


        res.status(201).json({
            mensagem: "Usuário criado com sucesso"});
    }

    static async login(req: Request, res: Response) {
        const repo = AppDataSource.getRepository(Usuario);
        const { username, password } = req.body;
        console.log("BODY RECEBIDO:", req.body);
        console.log("USERNAME:", username);
        console.log("PASSWORD:", password);

        const usuarioOk = await repo.findOneBy({ username });
        if (!usuarioOk) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }

        const senhaOk = await bcrypt.compare(password, usuarioOk.password);
        if (!senhaOk) {
            return res.status(401).json({ mensagem: "Senha incorreta" });
        }

        const token = jwt.sign(
            { id: usuarioOk.id, username: usuarioOk.username },
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            mensagem: "Login realizado com sucesso!",
            token
        });
    }
}
