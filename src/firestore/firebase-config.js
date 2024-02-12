import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZkfHY31WTg1Q3p3_h0YQTUpU_A6B-Nkk",
  authDomain: "ecommerce-37ba1.firebaseapp.com",
  projectId: "ecommerce-37ba1",
  storageBucket: "ecommerce-37ba1.appspot.com",
  messagingSenderId: "882251805375",
  appId: "1:882251805375:web:f2a5b71c140e17eba14c0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
export default app;
