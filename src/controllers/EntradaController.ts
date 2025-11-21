import { Request, Response } from "express";
import { AppDataSource } from "../data-source.js";

import { Entrada } from "../entity/Entrada.js";
import { Produto } from "../entity/Produto.js";

export class EntradaController{
  static async listar(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Entrada);

    const entradas = await repo.find({ relations: ["produto"] });

    return res.json(entradas);
  }

    static async criar (req: Request, res: Response){
        try {
            const {produtoId, quantidade} = req.body;

            const repoEntrada = AppDataSource.getRepository(Entrada);
            const repoProduto = AppDataSource.getRepository(Produto);

            const produtos = await repoProduto.findOneBy({id: Number(produtoId)});

            if(!produtos)
                return res.status(404).json({mensagem: "Produto não encontrado"});

            const novaEntrada = new Entrada(
            quantidade,
            new Date(),
            produtos
            );

            await repoEntrada.save(novaEntrada);

            produtos.estoque_atual =
            Number(produtos.estoque_atual) + Number(quantidade);

            await repoProduto.save(produtos);

            return res.status(201).json(novaEntrada);
        } catch(err: any){
            return res.status(400).json({erro: err.message});
        }
    }
}

export default EntradaController;