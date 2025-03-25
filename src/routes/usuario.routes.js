import express from "express";
const Router = express.Router();
import usuarioController from "../controllers/usuario.controller";
import authMiddleware from "./../middlewares/auth.middleware"


// Usuarios
Router.get('/', authMiddleware, usuarioController.funListar);
Router.post('/', authMiddleware, usuarioController.funGuardarUsuario);
Router.get('/:id', authMiddleware, usuarioController.funMostrar);
Router.put('/:id', authMiddleware, usuarioController.funModificar);
Router.delete('/:id', authMiddleware, usuarioController.funEliminar);


export default Router;