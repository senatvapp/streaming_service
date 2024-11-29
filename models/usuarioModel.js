// models/usuarioModel.js
const db = require('../config/db'); // Asegúrate de que db esté configurado correctamente

const Usuario = {
  // Obtener todos los usuarios
  getAll: async () => {
    const [rows] = await db.query(
      `SELECT 
        *FROM usuarios`
    );
    return rows;
  },

  // Obtener un usuario por ID
  getById: async (id) => {
    const [rows] = await db.query(
      `SELECT 
        usuario.id, 
        usuario.nombres, 
        usuario.apellidos, 
        usuario.correo_electronico, 
        usuario.username, 
        usuario.fecha_creacion
      FROM sql10742164.usuario WHERE usuario.id = ?`,
      [id]
    );
    return rows[0];  // Devuelve un solo usuario
  },

  // Crear un nuevo usuario
  create: async (nombre, apellido, correo, tipo_usuario_id ) => {
    const [result] = await db.query(
      `INSERT INTO usuarios (nombre, apellido, correo, tipo_usuario_id, fecha_creacion)
       VALUES (?, ?, ?, ?, NOW())`,
      [nombre, apellido, correo, tipo_usuario_id ]
    );
    return { id: result.insertId, nombre, apellido, correo, tipo_usuario_id  };
  },

  // Actualizar un usuario existente
  update: async (id, nombres, apellidos, correo_electronico, username) => {
    await db.query(
      `UPDATE sql10742164.usuario 
       SET nombres = ?, apellidos = ?, correo_electronico = ?, username = ?
       WHERE id = ?`,
      [nombres, apellidos, correo_electronico, username, id]
    );
    return { id, nombres, apellidos, correo_electronico, username };
  },

  // Eliminar un usuario
  delete: async (id) => {
    await db.query('DELETE FROM sql10742164.usuario WHERE id = ?', [id]);
    return { id };
  }
};

module.exports = Usuario;
