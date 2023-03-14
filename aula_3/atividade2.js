import express from "express";

const app = express();

app.get("/teste", (req, res) => {
  res.send("Rota ativada com Get e recurso TESTE: valores de TESTE devem ser retornados.");
});

app.listen(3000)
