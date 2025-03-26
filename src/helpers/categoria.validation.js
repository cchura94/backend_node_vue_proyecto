import { body } from "express-validator"

const categoriaValidator = [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio')
                    .isLength({min: 3, max: 50}).withMessage('El nombre debe tener entre 3 a 50 caracteres.'),
    
    body('detalle').optional().isLength({min: 0, max: 255}).withMessage('El detalle debe tener entre 10 a 255 caracteres.')

];

module.exports = categoriaValidator