import express from "express";

const app = express();
app.use(express.json());

// Rota fake para testes — sem banco
app.post("/auth/login", (req, res) => {
  console.log("BODY RECEBIDO:", req.body);
  return res.status(401).json({ mensagem: "Credenciais inválidas" });
});

app.get("/produtos", (req, res) => {
  return res.status(401).json({ mensagem: "Token não informado" });
});

export default app;
