// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlR3v7lwTjcF2-KxD9U-y5Gham3Q3-0p4",
  authDomain: "netflixgpt-d36e5.firebaseapp.com",
  projectId: "netflixgpt-d36e5",
  storageBucket: "netflixgpt-d36e5.appspot.com",
  messagingSenderId: "534061007933",
  appId: "1:534061007933:web:5aed1568a4d9d4f6865654",
  measurementId: "G-DJSR275DXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();