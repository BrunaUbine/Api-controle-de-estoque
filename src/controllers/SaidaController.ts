import { Request, Response } from "express";
import { AppDataSource } from "../data-source.js";

import Saida from "../entity/Saida.js";
import Produto from "../entity/Produto.js";

export class SaidaController {
  static async listar(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Saida);

    const saidas = await repo.find({ relations: ["produto"] });

    return res.json(saidas);
  }

  static async criar(req: Request, res: Response) {
    try {
      const { produtoId, quantidade } = req.body;

      const repoSaida = AppDataSource.getRepository(Saida);
      const repoProduto = AppDataSource.getRepository(Produto);

      const produto = await repoProduto.findOneBy({
        id: Number(produtoId),
      });

      if (!produto) {
        return res.status(404).json({ mensagem: "Produto não encontrado" });
      }

      if (produto.estoque_atual < quantidade) {
        return res.status(400).json({ mensagem: "Estoque insuficiente" });
      }

      const novaSaida = repoSaida.create({
        quantidade,
        data_saida: new Date(),
        produto,
      });

      await repoSaida.save(novaSaida);

      produto.estoque_atual = produto.estoque_atual - quantidade;
      await repoProduto.save(produto);

      return res.status(201).json(novaSaida);
    } catch (err: any) {
      return res.status(400).json({ erro: err.message });
    }
  }
}

export default SaidaController;
