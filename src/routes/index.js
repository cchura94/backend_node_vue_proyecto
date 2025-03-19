import express from "express";
import multer from "multer";
import authController from "./../controllers/auth.controller"
import usuarioController from "./../controllers/usuario.controller"
import categoriaController from "./../controllers/categoria.controller"
import productoController from "./../controllers/producto.controller"

import authMiddleware from "./../middlewares/auth.middleware"

// configuracion multer (subida de archivos)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/imagenes')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname);
    }
  })
  
  const upload = multer({ storage: storage })


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

// Categoria
Router.get('/producto', authMiddleware, productoController.listar);
Router.post('/producto', authMiddleware, productoController.guardar);
Router.put('/producto/:id', authMiddleware, productoController.modificar);

// Subida de imagen
Router.post("/producto/:id/actualizar-imagen", authMiddleware, upload.single("imagen"), productoController.actualizarImagen);


export default Router;