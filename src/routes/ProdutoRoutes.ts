import express from "express";
import ProdutoController from "../controllers/ProdutoController.js";
import { verificaToken } from "../middlewares/authMiddleware.js";

const router =express.Router();

router.get("/", ProdutoController.listar);
router.get("/:id", ProdutoController.buscar);
router.post("/", verificaToken, ProdutoController.criar);
router.put("/:id", verificaToken, ProdutoController.atualizar);
router.delete("/:id", verificaToken, ProdutoController.delete);

export default router;