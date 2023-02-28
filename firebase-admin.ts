const admin = require("firebase-admin");

let serviceAccount;

try {
  serviceAccount = require("/firebase-service-account.json");
} catch (error) {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string);
}

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

export { db }