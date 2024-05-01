// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr0pqoHb-xB5CCf5Gu_MtHw2KLdE_Q2PY",
  authDomain: "netflixgpt-e031b.firebaseapp.com",
  projectId: "netflixgpt-e031b",
  storageBucket: "netflixgpt-e031b.appspot.com",
  messagingSenderId: "358033752960",
  appId: "1:358033752960:web:a7e1a571af5deb0f3cb765",
  measurementId: "G-178CD4GP1V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
