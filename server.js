// server.js
const express = require('express');
const bodyParser = require('body-parser');
const contenidoRoutes = require('./routes/contenidoRoutes');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// Usar las rutas de contenido
app.use('/api', contenidoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
