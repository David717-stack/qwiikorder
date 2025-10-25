// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage, getStore} from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8zRR1-c3JyIlmcisbISkRfFOMPywZ-A4",
  authDomain: "qwiikorder-2398a.firebaseapp.com",
  projectId: "qwiikorder-2398a",
  storageBucket: "qwiikorder-2398a.firebasestorage.app",
  messagingSenderId: "960216217179",
  appId: "1:960216217179:web:9e04dae4393bda5aa7f17e"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};