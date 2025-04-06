"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _categoria = _interopRequireDefault(require("./../controllers/categoria.controller"));
var _auth = _interopRequireDefault(require("./../middlewares/auth.middleware"));
var _categoria2 = _interopRequireDefault(require("./../helpers/categoria.validation"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Router = _express.default.Router();
// Categoria
Router.get('/', _auth.default, _categoria.default.funListar);
Router.post('/', _auth.default, _categoria2.default, _categoria.default.funGuardar);
Router.get('/:id', _auth.default, _categoria.default.funMostrar);
Router.put('/:id', _auth.default, _categoria.default.funModificar);
Router.delete('/:id', _auth.default, _categoria.default.funEliminar);
var _default = exports.default = Router;