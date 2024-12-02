// server.js
const express = require('express');
const bodyParser = require('body-parser');
const contenidoRoutes = require('./routes/contenidoroutes');
const authRoutes = require('./routes/authRoutes');
const clasificacionRoutes = require('./routes/clasificacionRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const morgan = require('morgan');

const cors = require('cors');

require('dotenv').config();
const app = express();
app.use(cors());
app.use(cors({
  origin: 'http://localhost:8081', // Cambia esto a la URL de tu frontend
}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Usar las rutas de contenido
app.use('/api', contenidoRoutes);
app.use('/api/auth', authRoutes);
// Rutas para clasificaciones
app.use('/api/clasificaciones', clasificacionRoutes);
app.use('/api/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
