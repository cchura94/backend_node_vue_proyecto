import express from "express";
import multer from "multer";

const Router = express.Router();
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

// producto
Router.get('/', authMiddleware, productoController.listar);
Router.post('/', authMiddleware, productoController.guardar);
Router.put('/:id', authMiddleware, productoController.modificar);

// Subida de imagen
Router.post("/:id/actualizar-imagen", authMiddleware, upload.single("imagen"), productoController.actualizarImagen);


export default Router;