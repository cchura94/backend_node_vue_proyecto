import { body } from "express-validator"

const productoValidator = [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio')
                    .isLength({min: 3, max: 100}).withMessage('El nombre debe tener entre 3 a 100 caracteres.'),
    body('categoriaId').notEmpty().withMessage('La categoria es obligatoria'),    
    body('descripcion').optional().isLength({min: 10, max: 255}).withMessage('La descripción debe tener entre 10 a 255 caracteres.')

];

module.exports = productoValidator