import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "zedo-intl.firebaseapp.com",
  projectId: "zedo-intl",
  storageBucket: "zedo-intl.firebasestorage.app",
  messagingSenderId: "461236618420",
  appId: "1:461236618420:web:7561951ca52dc97f7403e1" 
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
