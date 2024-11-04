// routes/contenidoRoutes.js
const express = require('express');
const contenidoController = require('../controllers/contenidocontroller');

const router = express.Router();

router.get('/contenido', contenidoController.getAllContenido);
router.get('/contenido/:id', contenidoController.getContenidoById);
router.post('/contenido', contenidoController.createContenido);
router.put('/contenido/:id', contenidoController.updateContenido);
router.delete('/contenido/:id', contenidoController.deleteContenido);

module.exports = router;
