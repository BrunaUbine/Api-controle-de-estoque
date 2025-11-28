import { AppDataSource } from "../data-source.js";
import  { Produto }  from "../entity/Produto.js";
import { Request, Response } from "express";

export class ProdutoController{

    static async listar(req: Request, res: Response){
        const repo = AppDataSource.getRepository(Produto);
        const Produtos = await repo.find();
        return res.json(Produtos);
    }

    static async buscar(req: Request, res: Response){
        const repo = AppDataSource.getRepository(Produto);
        const Produtos = await repo.findOneBy({id:Number(req.params.id)});
        if(!Produtos) return res.status(404).json({mensagem: "Produto não encontrado"});
        return res.json(Produtos);
    }

    static async criar(req: Request, res: Response){
        try{
            const repo = AppDataSource.getRepository(Produto);
            const novo = repo.create(req.body as Partial<Produto>);
            const salvo = await repo.save(novo);
           return res.status(201).json({
            mensagem: "Produto criado com sucesso",
            id: salvo.id
        });
        } catch (err: any){
            return res.status(400).json({erro: err.message});
        }
    }

    static async atualizar(req: Request, res: Response){
        const repo = AppDataSource.getRepository(Produto);
        const produtos = await repo.findOneBy({id: Number(req.params.id)});

        if(!produtos){
            return res.status(404).json({mensagem: "Produto não encontrado"});
        }

        repo.merge(produtos, req.body);
        await repo.save(produtos);

        return res.json(produtos);
    }

    static async delete (req: Request, res: Response){
        const repo = AppDataSource.getRepository(Produto);
        const produtos = await repo.findOneBy({id: Number(req.params.id)});

        if(!produtos){
            return res.status(404).json({mensagem: "Produto não encontrado"});
        }

        await repo.remove(produtos);

        return res.status(204).send();
    }
}

export default ProdutoController;