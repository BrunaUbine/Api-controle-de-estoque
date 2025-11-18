import express from "express";
import EntradaController from "../controllers/EntradaController.js";
import { verificaToken } from "../middlewares/authMiddleware.js";

const router =express.Router();

router.get("/", verificaToken, EntradaController.listar);
router.post("/", verificaToken, EntradaController.criar);

export default router;

