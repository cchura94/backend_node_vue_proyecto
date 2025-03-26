import express from "express";
const Router = express.Router();
import categoriaController from "./../controllers/categoria.controller"
import authMiddleware from "./../middlewares/auth.middleware"
import categoriaValidation from "./../helpers/categoria.validation"


// Categoria
Router.get('/', authMiddleware, categoriaController.funListar);
Router.post('/', authMiddleware, categoriaValidation, categoriaController.funGuardar);
Router.get('/:id', authMiddleware, categoriaController.funMostrar);
Router.put('/:id', authMiddleware, categoriaController.funModificar);
Router.delete('/:id', authMiddleware, categoriaController.funEliminar);



export default Router;