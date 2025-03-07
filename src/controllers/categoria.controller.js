import models from "./../database/models";

export default {
  async funListar(req, res) {
    const categorias = await models.Categoria.findAll({
      attributes: ["id", "nombre", "detalle"],
    });
    return res.status(200).json(categorias);
  },

  async funGuardar(req, res) {
    const datos = req.body;
    try {
      const categoria = await models.Categoria.create(datos);

      return res
        .status(201)
        .json({ mensaje: "Categoria Registrada", categoria });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error al registrar la categoria" });
    }
  },
  async funMostrar(req, res) {
    const { id } = req.params;
    try {
      // crear un nuevo Usuario
      const categoria = await models.Categoria.findByPk(id, {
        attributes: ["id", "nombre", "detalle"],
      });

      if (!categoria) {
        return res.status(404).json({ error: "Categoria no encontrado" });
      }
      return res.status(200).json(categoria);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Error al obtener la categoria" });
    }
  },
  async funModificar(req, res) {
    // const id = req.params.id;
    const { id } = req.params;
    const { nombre, detalle, estado } = req.body;

    try {
      const categoria = await models.Categoria.findByPk(id);

      if (!categoria) {
        return res.status(404).json({ error: "categoria No encontrado" });
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

      return res
        .status(200)
        .json({ mensaje: "Categoria actualizado", categoria });
    } catch (error) {
      return res.status(500).json({ error: "Error al modificar la categoria" });
    }
  },
  async funEliminar(req, res) {},
};
