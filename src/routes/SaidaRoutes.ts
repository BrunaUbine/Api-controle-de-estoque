import express from "express";
import SaidaController from "../controllers/SaidaController.js";
import { verificaToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Saídas
 *   description: Gerenciamento das saídas de produtos do estoque
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Saida:
 *       type: object
 *       required:
 *         - produtoId
 *         - quantidade
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         produtoId:
 *           type: integer
 *           example: 3
 *         quantidade:
 *           type: number
 *           example: 5
 *         dataSaida:
 *           type: string
 *           format: date-time
 *           example: "2025-01-01T12:34:56Z"
 */

/**
 * @swagger
 * /saidas:
 *   get:
 *     summary: Lista todas as saídas registradas
 *     tags: [Saídas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de saídas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Saida'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/", verificaToken, SaidaController.listar);

/**
 * @swagger
 * /saidas:
 *   post:
 *     summary: Registra uma nova saída de produto do estoque
 *     tags: [Saídas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               produtoId:
 *                 type: integer
 *                 example: 3
 *               quantidade:
 *                 type: number
 *                 example: 2
 *     responses:
 *       201:
 *         description: Saída registrada com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/", verificaToken, SaidaController.criar);
export default router;
