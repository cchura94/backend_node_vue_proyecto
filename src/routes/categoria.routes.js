import express from "express";
const Router = express.Router();
import categoriaController from "./../controllers/categoria.controller"
import authMiddleware from "./../middlewares/auth.middleware"


// Categoria
Router.get('/', authMiddleware, categoriaController.funListar);
Router.post('/', authMiddleware, categoriaController.funGuardar);
Router.get('/:id', authMiddleware, categoriaController.funMostrar);
Router.put('/:id', authMiddleware, categoriaController.funModificar);
Router.delete('/:id', authMiddleware, categoriaController.funEliminar);



export default Router;