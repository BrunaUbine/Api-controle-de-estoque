import express from "express";
import SaidaController from "../controllers/SaidaController.js";
import { verificaToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", verificaToken, SaidaController.listar);
router.post("/", verificaToken, SaidaController.criar);


export default router;