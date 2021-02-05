const firebase = require('firebase');
const firebaseConfig = require('./config');
firebase.initializeApp(firebaseConfig);

const admin = require("firebase-admin");
const serviceAccount = require("../teleclinic-39fd7ff1d25330.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: firebaseConfig.storageBucket
});

const database = admin.firestore();

module.exports = {admin,database};
