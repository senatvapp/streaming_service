// controllers/contenidoController.js
const Contenido = require('../models/contenidomodel');

const getAllContenido = async (req, res) => {
  try {
    const contenido = await Contenido.getAll();
    res.json(contenido);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getContenidoById = async (req, res) => {
  try {
    const contenido = await Contenido.getById(req.params.id);
    if (!contenido) {
      return res.status(404).json({ message: 'Contenido no encontrado' });
    }
    res.json(contenido);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createContenido = async (req, res) => {
  const { nombre, sinopsis, anio_lanzamiento, imagen_url, director, usuario_creacion, tipo_contenido_codigo, genero_contenido_codigo } = req.body;
  try {
    const newContenido = await Contenido.create(nombre, sinopsis, anio_lanzamiento, imagen_url, director, usuario_creacion, tipo_contenido_codigo, genero_contenido_codigo);
    res.status(201).json(newContenido);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateContenido = async (req, res) => {
  const { nombre, sinopsis, anio_lanzamiento, imagen_url, director, tipo_contenido_codigo, genero_contenido_codigo } = req.body;
  try {
    const updatedContenido = await Contenido.update(req.params.id, nombre, sinopsis, anio_lanzamiento, imagen_url, director, tipo_contenido_codigo, genero_contenido_codigo);
    res.json(updatedContenido);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deleteContenido = async (req, res) => {
  try {
    await Contenido.delete(req.params.id);
    res.json({ message: 'Contenido eliminado exitosamente' });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllContenido,
  getContenidoById,
  createContenido,
  updateContenido,
  deleteContenido
};
