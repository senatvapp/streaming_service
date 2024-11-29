// models/clasificacionModel.js
const db = require('../config/db');

const Clasificacion = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM clasificacion');
    return rows;
  },

  // getById: async (contenido_id) => {
  //   const [rows] = await db.query('SELECT * FROM clasificacion WHERE contenido_id = ?', [contenido_id]);
  //   return rows;
  // },
  getById: async (contenido_id) => {
    const [rows] = await db.query(
      `
      SELECT 
        c.*, 
        u.nombre AS usuario_nombre, 
        u.apellido AS usuario_apellido, 
        u.correo AS usuario_correo
      FROM 
        clasificacion c
      JOIN 
        usuarios u 
      ON 
        c.usuario_id = u.id
      WHERE 
        c.contenido_id = ?
      `,
      [contenido_id]
    );
    return rows;
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
