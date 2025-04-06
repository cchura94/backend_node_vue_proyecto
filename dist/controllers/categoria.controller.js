"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _expressValidator = require("express-validator");
var _models = _interopRequireDefault(require("./../database/models"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  async funListar(req, res) {
    const categorias = await _models.default.Categoria.findAll({
      attributes: ["id", "nombre", "detalle"]
    });
    return res.status(200).json(categorias);
  },
  async funGuardar(req, res) {
    const datos = req.body;
    const errors = (0, _expressValidator.validationResult)(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }
    try {
      const categoria = await _models.default.Categoria.create(datos);
      return res.status(201).json({
        mensaje: "Categoria Registrada",
        categoria
      });
    } catch (error) {
      // console.log(error);
      return res.status(500).json({
        error: "Error al registrar la categoria",
        res: error
      });
    }
  },
  async funMostrar(req, res) {
    const {
      id
    } = req.params;
    try {
      // crear un nuevo Usuario
      const categoria = await _models.default.Categoria.findByPk(id, {
        attributes: ["id", "nombre", "detalle"]
      });
      if (!categoria) {
        return res.status(404).json({
          error: "Categoria no encontrado"
        });
      }
      return res.status(200).json(categoria);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Error al obtener la categoria"
      });
    }
  },
  async funModificar(req, res) {
    // const id = req.params.id;
    const {
      id
    } = req.params;
    const {
      nombre,
      detalle,
      estado
    } = req.body;
    try {
      const categoria = await _models.default.Categoria.findByPk(id);
      if (!categoria) {
        return res.status(404).json({
          error: "categoria No encontrado"
        });
      }

      // modificar
      if (nombre) {
        categoria.nombre = nombre;
      }
      if (detalle) categoria.detalle = detalle;
      if (estado) {
        categoria.estado = estado;
      }

      // guardar
      await categoria.save();
      return res.status(200).json({
        mensaje: "Categoria actualizado",
        categoria
      });
    } catch (error) {
      return res.status(500).json({
        error: "Error al modificar la categoria"
      });
    }
  },
  async funEliminar(req, res) {}
};