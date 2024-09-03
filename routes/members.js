// backend/routes/members.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Rota para listar membros
router.get('/', (req, res) => {
  db.query('SELECT * FROM membros', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;
