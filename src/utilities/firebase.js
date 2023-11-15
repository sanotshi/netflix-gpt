// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfOjWeWeeqPv8CO2aSHCYRaJmbYCkYafQ",
  authDomain: "netflixgpt-68068.firebaseapp.com",
  projectId: "netflixgpt-68068",
  storageBucket: "netflixgpt-68068.appspot.com",
  messagingSenderId: "376894445868",
  appId: "1:376894445868:web:44096e8d97dc99966df489",
  measurementId: "G-HDL1PP0S06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);