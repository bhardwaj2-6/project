// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvrn3bfwd9BLEywRjECssGzr6xo9UhLlc",
  authDomain: "event-management-cc7b7.firebaseapp.com",
  projectId: "event-management-cc7b7",
  storageBucket: "event-management-cc7b7.firebasestorage.app",
  messagingSenderId: "426763464266",
  appId: "1:426763464266:web:5ef8218d849b0a893700b3",
  measurementId: "G-BWQC5Q8BQK",
  databaseURL: "https://console.firebase.google.com/u/0/project/event-management-cc7b7/database/event-management-cc7b7-default-rtdb/data/~2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);