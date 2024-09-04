// backend/validations/memberValidation.js
const { body, validationResult } = require('express-validator');

exports.validateMember = [
  body('nome').notEmpty().withMessage('O nome é obrigatório.'),
  body('email').isEmail().withMessage('O email deve ser válido.'),
  // Adicione mais validações conforme necessário
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }
    next();
  },
];
