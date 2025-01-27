import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// const fs = require("fs")
// fs.readFileSync( path.join(__dirname")
// console.log(__dirname);

const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_APP_API_KEY,
  authDomain: process.env.REACT_FIREBASE_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_FIREBASE_APP_DATABASE_URL,
  projectId: process.env.REACT_FIREBASE_APP_PROJECT_ID,
  storageBucket: process.env.REACT_FIREBASE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_FIREBASE_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_FIREBASE_APP_APP_ID,
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
