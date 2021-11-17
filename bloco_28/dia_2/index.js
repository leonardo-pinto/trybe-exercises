const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.send(`Mensagem secrggeta: ${process.env.ENVIRONMENT}`)
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
