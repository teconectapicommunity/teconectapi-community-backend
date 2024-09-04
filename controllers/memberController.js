// backend/controllers/memberController.js
const Member = require('../models/memberModel');

// Controlador para obter todos os membros
exports.getAllMembers = (req, res, next) => {
  Member.getAll((err, members) => {
    if (err) {
      return next(err); // Passa o erro para o middleware de tratamento de erros
    }
    res.status(200).json(members);
  });
};

// Controlador para criar um novo membro
exports.createMember = (req, res, next) => {
  const newMember = req.body;
  Member.create(newMember, (err, memberId) => {
    if (err) {
      return next(err);
    }
    res.status(201).json({ id: memberId, ...newMember });
  });
};
