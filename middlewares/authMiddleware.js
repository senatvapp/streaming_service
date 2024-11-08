const admin = require('../config/firebase');

exports.verifyToken = async (req, res, next) => {
    const token = req.headers.authorization?.split('Bearer ')[0];
  
    if (!token) {
      return res.status(403).send('Token no proporcionado');
    }
  
    try {
      console.log('Verificando token:', token);  // Para depurar el token recibido
      const decodedToken = await admin.auth().verifyIdToken(token);
      req.user = decodedToken;
      next();
    } catch (error) {
      console.error('Error al verificar token:', error);
      res.status(401).send('Token inválido error:',error);
    }
  };