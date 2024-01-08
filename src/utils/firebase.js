// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE9dcNREcigwHhiTbTEgPj10krvHRbCsM",
  authDomain: "netflixgpt-50025.firebaseapp.com",
  projectId: "netflixgpt-50025",
  storageBucket: "netflixgpt-50025.appspot.com",
  messagingSenderId: "853944793564",
  appId: "1:853944793564:web:78c22b809e8d45e73fb719",
  measurementId: "G-WGY7QNL07Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();