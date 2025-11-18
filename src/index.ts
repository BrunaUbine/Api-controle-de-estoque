import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source.js";


import authRoutes from "./routes/authRoutes.js";
import produtoRoutes from "./routes/ProdutoRoutes.js";
import entradaRoutes from "./routes/EntradaRoutes.js";
import saidaRoutes from "./routes/SaidaRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/produtos", produtoRoutes);
app.use("/entradas", entradaRoutes);
app.use("/saidas", saidaRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Banco conectado com TypeORM");
    const port = process.env.PORT || 3000;
    app.listen(port, () =>
      console.log(`🚀 Servidor rodando na porta ${port}`)
    );
  })
  .catch((err) => console.error("Erro ao conectar no banco:", err));
