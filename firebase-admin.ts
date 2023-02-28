const admin = require("firebase-admin");

var serviceAccount = require("/firebase-service-account.json");

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

export { db }