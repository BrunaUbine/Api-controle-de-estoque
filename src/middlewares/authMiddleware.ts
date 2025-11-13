import jwt from "jsonwebtoken";
import donetv  from "dotenv";
import { Request, Response, NextFunction } from "express";

donetv.config();

export function verificaToken(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization;
    if (!authHeader){
        res.status(401).json({error: "Token não Informado."});
        return;
    }

    const Token = authHeader.split(" ")[1];
    jwt.verify(Token, process.env.JWT_SECRET as string, (err, decoded) => {
        if(err) return res.status(403).json({mensagem: "Token inválido ou expirado"});
        (req as any).usuario = decoded;
        next();
    });
}