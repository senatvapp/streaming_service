// controllers/clasificacionController.js
const Clasificacion = require('../models/clasificacionModel');

const clasificacionController = {
  getAll: async (req, res) => {
    try {
      const clasificaciones = await Clasificacion.getAll();
      res.json(clasificaciones);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener clasificaciones', error });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const clasificacion = await Clasificacion.getById(id);
      if (clasificacion) {
        res.json(clasificacion);
      } else {
        res.status(404).json({ message: 'Clasificación no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la clasificación', error });
    }
  },

  create: async (req, res) => {
    try {
      const { calificacion, comentario, contenido_id, usuario_id } = req.body;
      const nuevaClasificacion = await Clasificacion.create(calificacion, comentario, contenido_id, usuario_id);
      res.status(201).json(nuevaClasificacion);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la clasificación', error });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { calificacion, comentario } = req.body;
      const clasificacionExistente = await Clasificacion.getById(id);

      if (clasificacionExistente) {
        const clasificacionActualizada = await Clasificacion.update(id, calificacion, comentario);
        res.json(clasificacionActualizada);
      } else {
        res.status(404).json({ message: 'Clasificación no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la clasificación', error });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const clasificacionExistente = await Clasificacion.getById(id);

      if (clasificacionExistente) {
        await Clasificacion.delete(id);
        res.json({ message: 'Clasificación eliminada correctamente' });
      } else {
        res.status(404).json({ message: 'Clasificación no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la clasificación', error });
    }
  },
};

module.exports = clasificacionController;
