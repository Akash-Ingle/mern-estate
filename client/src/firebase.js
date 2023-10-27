// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2b7f1.firebaseapp.com",
  projectId: "mern-estate-2b7f1",
  storageBucket: "mern-estate-2b7f1.appspot.com",
  messagingSenderId: "239271247348",
  appId: "1:239271247348:web:93a133a8336072b849cda1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);