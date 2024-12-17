// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKQfLuvAxt04XMjnNzxdPoqfTAHuAT6Pg",
  authDomain: "ai-trip-planner-df991.firebaseapp.com",
  projectId: "ai-trip-planner-df991",
  storageBucket: "ai-trip-planner-df991.firebasestorage.app",
  messagingSenderId: "822212704683",
  appId: "1:822212704683:web:5ad5ca403887069301faee",
  measurementId: "G-X9E1DLK7T6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
