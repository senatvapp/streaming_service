const admin = require('firebase-admin');

// const serviceAccount = require('../login.json');
console.log
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
