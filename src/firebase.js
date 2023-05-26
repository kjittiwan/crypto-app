import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA2_UFupgkH9QFNlaUzzwkhok1huWRuCkU",
  authDomain: "cryptoplanet-34490.firebaseapp.com",
  projectId: "cryptoplanet-34490",
  storageBucket: "cryptoplanet-34490.appspot.com",
  messagingSenderId: "882547569049",
  appId: "1:882547569049:web:b06faa81a3972495b46308",
  measurementId: "G-2XBH6YSVTR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;