"use strict";

var _expressValidator = require("express-validator");
const productoValidator = [(0, _expressValidator.body)('nombre').notEmpty().withMessage('El nombre es obligatorio').isLength({
  min: 3,
  max: 100
}).withMessage('El nombre debe tener entre 3 a 100 caracteres.'), (0, _expressValidator.body)('categoriaId').notEmpty().withMessage('La categoria es obligatoria'), (0, _expressValidator.body)('descripcion').optional().isLength({
  min: 10,
  max: 255
}).withMessage('La descripción debe tener entre 10 a 255 caracteres.')];
module.exports = productoValidator;