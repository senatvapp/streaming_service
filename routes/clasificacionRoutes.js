// routes/clasificacionRoutes.js
const express = require('express');
const router = express.Router();
const clasificacionController = require('../controllers/clasificacionController');
const { verifyToken } = require('../middlewares/authMiddleware'); // Importa el middleware de autenticación


// Ruta para obtener todas las clasificaciones
router.get('/', clasificacionController.getAll);

// Ruta para obtener una clasificación por ID
router.get('/:id', clasificacionController.getById);

// Ruta para crear una nueva clasificación
router.post('/', clasificacionController.create);

// Ruta para actualizar una clasificación existente
router.put('/:id', clasificacionController.update);

// Ruta para eliminar una clasificación
router.delete('/:id', clasificacionController.delete);

module.exports = router;
