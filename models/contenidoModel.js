// models/contenidoModel.js
const db = require('../config/db');

const Contenido = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM contenido');
    return rows;
  },

  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM contenido WHERE id = ?', [id]);
    return rows[0];
  },

  create: async (nombre, sinopsis, anio_lanzamiento, imagen_url, director, usuario_creacion, tipo_contenido_codigo, genero_contenido_codigo) => {
    const [result] = await db.query(
      'INSERT INTO contenido (nombre, sinopsis, anio_lanzamiento, imagen_url, director, usuario_creacion, fecha_creacion, tipo_contenido_codigo, genero_contenido_codigo) VALUES (?, ?, ?, ?, ?, ?, NOW(), ?, ?)',
      [nombre, sinopsis, anio_lanzamiento, imagen_url, director, usuario_creacion, tipo_contenido_codigo, genero_contenido_codigo]
    );
    return { id: result.insertId, nombre, sinopsis, anio_lanzamiento, imagen_url, director, usuario_creacion, tipo_contenido_codigo, genero_contenido_codigo };
  },

  update: async (id, nombre, sinopsis, anio_lanzamiento, imagen_url, director, tipo_contenido_codigo, genero_contenido_codigo) => {
    await db.query(
      'UPDATE contenido SET nombre = ?, sinopsis = ?, anio_lanzamiento = ?, imagen_url = ?, director = ?, tipo_contenido_codigo = ?, genero_contenido_codigo = ? WHERE id = ?',
      [nombre, sinopsis, anio_lanzamiento, imagen_url, director, tipo_contenido_codigo, genero_contenido_codigo, id]
    );
    return { id, nombre, sinopsis, anio_lanzamiento, imagen_url, director, tipo_contenido_codigo, genero_contenido_codigo };
  },

  delete: async (id) => {
    await db.query('DELETE FROM contenido WHERE id = ?', [id]);
    return { id };
  }
};

module.exports = Contenido;
