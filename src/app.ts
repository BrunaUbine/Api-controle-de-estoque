import express from "express";

const app = express();
app.use(express.json());


app.post("/auth/login", (req, res) => {
  console.log("BODY RECEBIDO:", req.body);
  return res.status(401).json({ mensagem: "Credenciais inválidas" });
});

app.get("/produtos", (req, res) => {
  return res.status(401).json({ mensagem: "Token não informado" });
});

export default app;
