"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _multer = _interopRequireDefault(require("multer"));
var _producto = _interopRequireDefault(require("./../controllers/producto.controller"));
var _auth = _interopRequireDefault(require("./../middlewares/auth.middleware"));
var _producto2 = _interopRequireDefault(require("./../helpers/producto.validation"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Router = _express.default.Router();
// configuracion multer (subida de archivos)
const storage = _multer.default.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/imagenes');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname);
  }
});
const upload = (0, _multer.default)({
  storage: storage
});

// producto
Router.get('/', _auth.default, _producto.default.listar);
Router.post('/', _auth.default, _producto2.default, _producto.default.guardar);
Router.put('/:id', _auth.default, _producto.default.modificar);

// Subida de imagen
Router.post("/:id/actualizar-imagen", _auth.default, upload.single("imagen"), _producto.default.actualizarImagen);
var _default = exports.default = Router;