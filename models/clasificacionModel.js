// models/clasificacionModel.js
const db = require('../config/db');

const Clasificacion = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM clasificacion');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM clasificacion WHERE id = ?', [id]);
    return rows[0];
  },

  create: async (calificacion, comentario, contenido_id, usuario_id) => {
    const [result] = await db.query(
      'INSERT INTO clasificacion (calificacion, comentario, fecha_creacion, contenido_id, usuario_id) VALUES (?, ?, NOW(), ?, ?)',
      [calificacion, comentario, contenido_id, usuario_id]
    );
    return { id: result.insertId, calificacion, comentario, fecha_creacion: new Date(), contenido_id, usuario_id };
  },

  update: async (id, calificacion, comentario) => {
    await db.query(
      'UPDATE clasificacion SET calificacion = ?, comentario = ? WHERE id = ?',
      [calificacion, comentario, id]
    );
    return { id, calificacion, comentario };
  },

  delete: async (id) => {
    await db.query('DELETE FROM clasificacion WHERE id = ?', [id]);
    return { id };
  }
};

module.exports = Clasificacion;
