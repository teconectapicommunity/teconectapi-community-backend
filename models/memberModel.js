// backend/models/memberModel.js
const db = require('../config/db');

// Método para obter todos os membros
exports.getAll = (callback) => {
  const query = 'SELECT * FROM membros';
  db.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Método para criar um novo membro
exports.create = (memberData, callback) => {
  const query = 'INSERT INTO membros SET ?';
  db.query(query, memberData, (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result.insertId);
  });
};
