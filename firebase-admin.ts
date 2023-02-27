const admin = require("firebase-admin");

var serviceAccount = require("/firebase-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export { db }