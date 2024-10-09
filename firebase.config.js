
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, signInWithCustomToken } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCisTrzVuTSewDfkmLYRdQ9vTRhUiAgQTk",
  authDomain: "whatsapp-d47c0.firebaseapp.com",
  projectId: "whatsapp-d47c0",
  storageBucket: "whatsapp-d47c0.appspot.com",
  messagingSenderId: "441126127365",
  appId: "1:441126127365:web:373a0f82dee0f6c2ffd96c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
