import express from "express";
import authController from "./../controllers/auth.controller"
import usuarioController from "./../controllers/usuario.controller"
import categoriaController from "./../controllers/categoria.controller"
import authMiddleware from "./../middlewares/auth.middleware"

const Router = express.Router();

// http://127.0.0.1:3000/api/v1/auth/login
Router.post("/auth/login", authController.funLogin);
Router.post("/auth/register", authController.funRegister);
Router.get("/auth/profile", authController.funPerfil);
Router.post("/auth/logout", authController.funLogout);

// Usuarios
Router.get('/usuario', authMiddleware, usuarioController.funListar);
Router.post('/usuario', authMiddleware, usuarioController.funGuardarUsuario);
Router.get('/usuario/:id', authMiddleware, usuarioController.funMostrar);
Router.put('/usuario/:id', authMiddleware, usuarioController.funModificar);
Router.delete('/usuario/:id', authMiddleware, usuarioController.funEliminar);

// Categoria
Router.get('/categoria', authMiddleware, categoriaController.funListar);
Router.post('/categoria', authMiddleware, categoriaController.funGuardar);
Router.get('/categoria/:id', authMiddleware, categoriaController.funMostrar);
Router.put('/categoria/:id', authMiddleware, categoriaController.funModificar);
Router.delete('/categoria/:id', authMiddleware, categoriaController.funEliminar);


export default Router;