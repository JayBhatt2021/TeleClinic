const firebase = require('firebase');
const firebaseConfig = require('./config');
firebase.initializeApp(firebaseConfig);

const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const database = admin.firestore();

module.exports = {admin,database};
