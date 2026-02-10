// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1BoHvE_7cBgH4ez0oEt5-cgJFDoEhGIw",
  authDomain: "edulyft.firebaseapp.com",
  projectId: "edulyft",
  storageBucket: "edulyft.firebasestorage.app",
  messagingSenderId: "71796501956",
  appId: "1:71796501956:web:d247574e2064977a5d8891",
  measurementId: "G-0GXD0E5PYX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
