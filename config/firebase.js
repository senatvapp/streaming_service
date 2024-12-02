// const admin = require('firebase-admin');

// // const serviceAccount = require('../login.json');
// console.log
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// module.exports = admin;

const admin = require("firebase-admin");

require("dotenv").config();
//const serviceAccount = require('../login.json');
const serviceAccount = JSON.parse(
  process.env.FIREBASE_CONFIG.replace(/\\\\n/g, "\\n") // Cambia \\n a \n
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
