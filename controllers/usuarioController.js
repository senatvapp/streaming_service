// controllers/usuarioController.js
const Usuario = require('../models/usuarioModel');

const usuarioController = {
  // Obtener todos los usuarios
  getAll: async (req, res) => {
    try {
      const usuarios = await Usuario.getAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener usuarios', error });
    }
  },

  // Obtener un usuario por ID
  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const usuario = await Usuario.getById(id);
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
  },

  // Crear un nuevo usuario
  create: async (req, res) => {
    const { nombres, apellidos, correo_electronico, username } = req.body;
    try {
      const nuevoUsuario = await Usuario.create(nombres, apellidos, correo_electronico, username);
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el usuario', error });
    }
  },

  // Actualizar un usuario existente
  update: async (req, res) => {
    const { id } = req.params;
    const { nombres, apellidos, correo_electronico, username } = req.body;
    try {
      const usuarioActualizado = await Usuario.update(id, nombres, apellidos, correo_electronico, username);
      res.json(usuarioActualizado);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el usuario', error });
    }
  },

  // Eliminar un usuario
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      await Usuario.delete(id);
      res.status(204).json({ message: 'Usuario eliminado' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
  }
};

module.exports = usuarioController;
