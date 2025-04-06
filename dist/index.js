"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _auth = _interopRequireDefault(require("./routes/auth.routes"));
var _categoria = _interopRequireDefault(require("./routes/categoria.routes"));
var _usuario = _interopRequireDefault(require("./routes/usuario.routes"));
var _producto = _interopRequireDefault(require("./routes/producto.routes"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import rutas from './routes'

require('dotenv').config();

// importandos archivos routes

const app = (0, _express.default)();
const PORT = process.env.PORT || 3000;

// habilitando cors
app.use((0, _cors.default)());

// vizualizar archivos estaticos
app.use(_express.default.static('public'));

// aceptar peticiones en formato JSON (req.body)
app.use(_express.default.json());

// rutas
app.use("/api/v1/auth", _auth.default);
app.use("/api/v1/categoria", _categoria.default);
app.use("/api/v1/usuario", _usuario.default);
app.use("/api/v1/producto", _producto.default);
app.listen(PORT, function () {
  console.log(`Servidor iniciadoo en http://127.0.0.1:${PORT}`);
});