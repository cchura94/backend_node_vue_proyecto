"use strict";

var _expressValidator = require("express-validator");
const categoriaValidator = [(0, _expressValidator.body)('nombre').notEmpty().withMessage('El nombre es obligatorio').isLength({
  min: 3,
  max: 50
}).withMessage('El nombre debe tener entre 3 a 50 caracteres.'), (0, _expressValidator.body)('detalle').optional().isLength({
  min: 0,
  max: 255
}).withMessage('El detalle debe tener entre 10 a 255 caracteres.')];
module.exports = categoriaValidator;