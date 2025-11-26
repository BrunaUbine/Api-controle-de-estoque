import { AppDataSource } from "../data-source.js";
import { Usuario } from "../entity/Usuario.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

export class AuthController {
    static async registrar(req: Request, res: Response) {
        try {
            const repo = AppDataSource.getRepository(Usuario);
            
            const { email, senha } = req.body;

            if (!email || !senha) {
                return res.status(400).json({ mensagem: "Email e senha são obrigatórios." });
            }

            const username = email;
            const password = senha;

            const existente = await repo.findOneBy({ username });
            if (existente) {
                return res.status(400).json({ mensagem: "Usuário já existente" });
            }

            const hashed = await bcrypt.hash(String(password), 8);

            const novo = repo.create({
                username: String(username),
                password: hashed,
            });

            await repo.save(novo);

            return res.status(201).json({ mensagem: "Usuário criado com sucesso" });
        } catch (err: any) {
            console.error("ERRO registrar:", err);
            return res.status(500).json({ erro: err.message });
        }
    }


    static async login(req: Request, res: Response) {
        const repo = AppDataSource.getRepository(Usuario);

        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ mensagem: "Email e senha são obrigatórios." });
        }

        const username = email;
        const password = senha;

        const usuarioOk = await repo.findOneBy({ username });
        if (!usuarioOk) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }

        const senhaOk = await bcrypt.compare(String(password), usuarioOk.password);
        if (!senhaOk) {
            return res.status(401).json({ mensagem: "Senha incorreta" });
        }

        const token = jwt.sign(
            { id: usuarioOk.id, username: usuarioOk.username },
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" }
        );

        return res.status(200).json({
            mensagem: "Login realizado com sucesso!",
            token
        });
    }
}
