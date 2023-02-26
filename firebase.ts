// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlfBVFzZbX9LDtsg91lRQTGo8bQnY-CZE",
  authDomain: "chatgpt-starter-fa679.firebaseapp.com",
  projectId: "chatgpt-starter-fa679",
  storageBucket: "chatgpt-starter-fa679.appspot.com",
  messagingSenderId: "926768620323",
  appId: "1:926768620323:web:28cac6470361dbdd2d2296"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
