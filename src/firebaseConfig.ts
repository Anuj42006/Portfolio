// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7Ci7mp7kaZTuoOFq4e-DCOpoX9IMTgeE",
  authDomain: "anuj-portfolio-01.firebaseapp.com",
  databaseURL: "https://anuj-portfolio-01-default-rtdb.firebaseio.com",
  projectId: "anuj-portfolio-01",
  storageBucket: "anuj-portfolio-01.firebasestorage.app",
  messagingSenderId: "944040570208",
  appId: "1:944040570208:web:bd35b6823941837f770205",
  measurementId: "G-2Q7PMJH71P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);