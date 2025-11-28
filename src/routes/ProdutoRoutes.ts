import express from "express";
import ProdutoController from "../controllers/ProdutoController.js";
import { verificaToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Gerenciamento de produtos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Produto:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         categoria:
 *           type: string
 *           example: "Eletrônicos"
 *         nome:
 *           type: string
 *           example: "Monitor Gamer"
 *         preco_custo:
 *           type: number
 *           example: 1000.00
 *         preco_venda:
 *           type: number
 *           example: 1599.90
 *         estoque_atual:
 *           type: number
 *           example: 20
 *         estoque_minimo:
 *           type: number
 *           example: 5
 *         validade:
 *           type: string
 *           format: date
 *           example: "2025-12-31"
 *         fornecedor:
 *           type: string
 *           example: "Fornecedor ABC"

 *     ProdutoCriar:
 *       type: object
 *       required:
 *         - categoria
 *         - nome
 *         - preco_custo
 *         - preco_venda
 *         - estoque_atual
 *         - estoque_minimo
 *       properties:
 *         categoria:
 *           type: string
 *           example: "Eletrônicos"
 *         nome:
 *           type: string
 *           example: "Monitor Gamer"
 *         preco_custo:
 *           type: number
 *           example: 1000.00
 *         preco_venda:
 *           type: number
 *           example: 1599.90
 *         estoque_atual:
 *           type: number
 *           example: 20
 *         estoque_minimo:
 *           type: number
 *           example: 5
 *         validade:
 *           type: string
 *           format: date
 *           example: "2025-12-31"
 *         fornecedor:
 *           type: string
 *           example: "Fornecedor XYZ"
 */

/**
 * @swagger
 * /produtos:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Produto'
 */
router.get("/", ProdutoController.listar);

/**
 * @swagger
 * /produtos/{id}:
 *   get:
 *     summary: Busca um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Produto'
 *       404:
 *         description: Produto não encontrado
 */
router.get("/:id", ProdutoController.buscar);

/**
 * @swagger
 * /produtos:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Produtos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProdutoCriar'

 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: "Produto criado com sucesso"
 *                 id:
 *                   type: integer
 *                   example: 8
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/", verificaToken, ProdutoController.criar);

/**
 * @swagger
 * /produtos/{id}:
 *   put:
 *     summary: Atualiza um produto
 *     tags: [Produtos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProdutoCriar'
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *       404:
 *         description: Produto não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.put("/:id", verificaToken, ProdutoController.atualizar);

/**
 * @swagger
 * /produtos/{id}:
 *   delete:
 *     summary: Exclui um produto
 *     tags: [Produtos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Produto excluído com sucesso
 *       404:
 *         description: Produto não encontrado
 *       401:
 *         description: Token inválido ou ausente
 */
router.delete("/:id", verificaToken, ProdutoController.delete);

export default router;
