const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Função de soma para testes
function soma(a, b) {
  return a + b;
}

app.get('/', (req, res) => {
  res.json({
    message: 'API de Exemplo para CI/CD',
    version: '1.0.0'
  });
});

// Só inicia o servidor se não estivermos em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
}

module.exports = { app, soma };