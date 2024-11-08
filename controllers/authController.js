const admin = require('../config/firebase');
const { getAuth } = require('firebase-admin/auth');

exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const userRecord = await getAuth().getUserByEmail(email);
      
      // Si el usuario existe, generamos un token de acceso
      const customToken = await getAuth().createCustomToken(userRecord.uid);
      
      res.status(200).json({ message: 'Login exitoso', token: customToken });
    } catch (error) {
      console.error('Error al autenticar:', error);
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  };

exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await getAuth().createUser({
      email,
      password,
    });
    res.status(201).json({ message: 'Usuario registrado exitosamente', uid: userRecord.uid });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
