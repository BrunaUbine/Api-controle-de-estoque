import { AppDataSource } from "../data-source";
import  Produto  from "../entity/Produto";
import { Request, Response } from "express";

export class ProdutoController{

    static async listar(req: Request, res: Response){
        const repo = AppDataSource.getRepository(Produto);
        const Produtos = await repo.find();
        res.json(Produtos);
    }

    static async buscar(req: Request, res: Response){
        const repo = AppDataSource.getRepository(Produto);
        const Produtos = await repo.findOneBy({id:Number(req.params.id)});
        if(!Produtos) return res.status(404).json({mensagem: "Produto não encontrado"});
    }
}