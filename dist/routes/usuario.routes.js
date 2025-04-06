"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _usuario = _interopRequireDefault(require("../controllers/usuario.controller"));
var _auth = _interopRequireDefault(require("./../middlewares/auth.middleware"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Router = _express.default.Router();
// Usuarios
Router.get('/', _auth.default, _usuario.default.funListar);
Router.post('/', _auth.default, _usuario.default.funGuardarUsuario);
Router.get('/:id', _auth.default, _usuario.default.funMostrar);
Router.put('/:id', _auth.default, _usuario.default.funModificar);
Router.delete('/:id', _auth.default, _usuario.default.funEliminar);
var _default = exports.default = Router;