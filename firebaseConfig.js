// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnIfGmcQe7lV6JWMCM0TBDBny4Vw_9oEk",
  authDomain: "fitness-trainer-aa0e1.firebaseapp.com",
  projectId: "fitness-trainer-aa0e1",
  storageBucket: "fitness-trainer-aa0e1.appspot.com",
  messagingSenderId: "578973795855",
  appId: "1:578973795855:web:b7565291f13bbd3bb8c57a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);