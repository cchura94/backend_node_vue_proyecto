"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _auth = _interopRequireDefault(require("./../controllers/auth.controller"));
var _auth2 = _interopRequireDefault(require("../middlewares/auth.middleware"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Router = _express.default.Router();

// http://127.0.0.1:3000/api/v1/auth/login
Router.post("/login", _auth.default.funLogin);
Router.post("/register", _auth.default.funRegister);
Router.get("/profile", _auth2.default, _auth.default.funPerfil);
Router.post("/logout", _auth.default.funLogout);
var _default = exports.default = Router;