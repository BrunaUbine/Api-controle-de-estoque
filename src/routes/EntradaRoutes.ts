import express from "express";
import EntradaController from "../controllers/EntradaController.js";
import { verificaToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Entradas
 *   description: Gerenciamento das entradas de produtos no estoque
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Entrada:
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
 *           example: 10
 *         dataEntrada:
 *           type: string
 *           format: date-time
 *           example: "2025-01-01T12:34:56Z"
 */

/**
 * @swagger
 * /entradas:
 *   get:
 *     summary: Lista todas as entradas cadastradas
 *     tags: [Entradas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de entradas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Entrada'
 *       401:
 *         description: Token inválido ou ausente
 */
router.get("/", verificaToken, EntradaController.listar);

/**
 * @swagger
 * /entradas:
 *   post:
 *     summary: Registra uma nova entrada de produto no estoque
 *     tags: [Entradas]
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
 *                 example: 50
 *     responses:
 *       201:
 *         description: Entrada registrada com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token inválido ou ausente
 */
router.post("/", verificaToken, EntradaController.criar);

export default router;
