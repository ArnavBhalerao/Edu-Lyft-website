// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1BoHvE_7cBgH4ez0oEt5-cgJFDoEhGIw",
  authDomain: "edulyft.firebaseapp.com",
  projectId: "edulyft",
  storageBucket: "edulyft.firebasestorage.app",
  messagingSenderId: "71796501956",
  appId: "1:71796501956:web:d247574e2064977a5d8891",
  measurementId: "G-0GXD0E5PYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
