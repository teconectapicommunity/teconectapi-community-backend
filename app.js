// backend/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const membersRouter = require('./routes/members');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/members', membersRouter);

// Rota básica para teste
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Middleware de tratamento de erros (deve ser o último middleware)
app.use(errorHandler);

// Iniciar o servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
