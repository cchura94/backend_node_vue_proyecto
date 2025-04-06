"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sequelize = require("sequelize");
var _models = _interopRequireDefault(require("./../database/models"));
var _expressValidator = require("express-validator");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  listar: async (req, res) => {
    try {
      // /api/v1/producto?page=1&limit=10&q=TECL
      const q = req.query.q;
      const page = parseInt(req.query.page || 1);
      const limit = parseInt(req.query.limit || 10);
      const offset = (page - 1) * limit;
      const productos = await _models.default.Producto.findAndCountAll({
        where: {
          nombre: {
            [_sequelize.Op.like]: `%${q}%`
          }
        },
        include: [_models.default.Categoria],
        offset: offset,
        limit: limit
      });
      return res.status(200).json(productos);
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  },
  guardar: async (req, res) => {
    try {
      const errors = (0, _expressValidator.validationResult)(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }
      const datos = req.body;
      const producto = await _models.default.Producto.create(datos);
      if (producto.id) {
        return res.status(201).json({
          message: "Producto Registrado"
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  },
  modificar: async (req, res) => {
    try {
      const id = req.params.id;
      const datos = req.body;
      const producto = await _models.default.Producto.findByPk(id);
      if (producto) {
        await _models.default.Producto.update(datos, {
          where: {
            id: producto.id
          }
        });
        return res.status(201).json({
          message: "Producto Actualizado"
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message
      });
    }
  },
  actualizarImagen: async (req, res) => {
    const id = req.params.id;
    let datos = {};
    if (req.file) {
      datos.imagen = "imagenes/" + req.file.filename;
    }
    await _models.default.Producto.update(datos, {
      where: {
        id: id
      }
    });
    return res.status(200).json({
      menssage: "Imagen Actualizada"
    });
  }
};