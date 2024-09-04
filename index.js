// backend/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');  // Certifique-se de que o caminho está correto
 // Módulo de conexão ao banco de dados

// Inicialize a aplicação Express
const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Importa as rotas
const membersRouter = require('./routes/members');

// Define as rotas
app.use('/members', membersRouter);

// Rota básica para teste
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
