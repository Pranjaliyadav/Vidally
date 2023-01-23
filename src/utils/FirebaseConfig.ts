// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { collection,getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjALxzSdwxGfW98PeuLzCxCT5UZMxxHBM",
  authDomain: "vidally-843c5.firebaseapp.com",
  projectId: "vidally-843c5",
  storageBucket: "vidally-843c5.appspot.com",
  messagingSenderId: "918416288607",
  appId: "1:918416288607:web:3cc173917b92cff3fda4ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);