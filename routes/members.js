// backend/routes/members.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Rota para listar membros
router.get('/', (req, res) => {
  db.query('SELECT * FROM membros', (err, results) => {
    if (err) {
      console.error('Erro ao buscar membros:', err);
      return res.status(500).json({ error: 'Erro ao buscar membros' });
    }
    res.json(results);
  });
});

module.exports = router;
