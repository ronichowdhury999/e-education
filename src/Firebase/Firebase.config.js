// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdwrEHFWG98WmuyJULWpCKMyNfKjIgjjw",
  authDomain: "e-education-b0abd.firebaseapp.com",
  projectId: "e-education-b0abd",
  storageBucket: "e-education-b0abd.firebasestorage.app",
  messagingSenderId: "811595738004",
  appId: "1:811595738004:web:b75914d4ee23a16f657d81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);