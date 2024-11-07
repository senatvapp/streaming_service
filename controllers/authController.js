const admin = require('../config/firebase');
const { getAuth } = require('firebase-admin/auth');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userRecord = await getAuth().getUserByEmail(email);
    // Aquí puedes implementar la lógica para verificar la contraseña
    // Firebase Admin SDK no permite verificar contraseñas directamente.
    
    // Si la verificación es exitosa
    const customToken = await getAuth().createCustomToken(userRecord.uid);

    // Retorna el token personalizado al cliente
    res.status(200).json({ message: 'Login exitoso', token: customToken });
  } catch (error) {
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
