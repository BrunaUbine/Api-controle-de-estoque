import express from "express";
import { AuthController } from "../controllers/AuthController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Autenticação
 *   description: Rotas de registro e login de usuários
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UsuarioRegistro:
 *       type: object
 *       required:
 *         - email
 *         - senha
 *       properties:
 *         email:
 *           type: string
 *           example: "bruna@gmail.com"
 *         senha:
 *           type: string
 *           example: "123456"
 *
 *     UsuarioLogin:
 *       type: object
 *       required:
 *         - email
 *         - senha
 *       properties:
 *         email:
 *           type: string
 *           example: "bruna@gmail.com"
 *         senha:
 *           type: string
 *           example: "123456"
 *
 *     AuthResponse:
 *       type: object
 *       properties:
 *         mensagem:
 *           type: string
 *           example: "Usuário registrado com sucesso"
 *         token:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 */

/**
 * @swagger
 * /auth/registrar:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UsuarioRegistro'
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Dados inválidos
 */
router.post("/registrar", AuthController.registrar);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Realiza o login de um usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UsuarioLogin'
 *     responses:
 *       200:
 *         description: Login realizado com sucesso — retorna o token JWT
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       401:
 *         description: Email ou senha incorretos
 */
router.post("/login", AuthController.login);

export default router;
