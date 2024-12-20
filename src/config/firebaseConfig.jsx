// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmuegY56IWVBQmQSwQIu_j4cJInsU-ahI",
  authDomain: "authtest-57113.firebaseapp.com",
  projectId: "authtest-57113",
  storageBucket: "authtest-57113.firebasestorage.app",
  messagingSenderId: "659067854048",
  appId: "1:659067854048:web:8e12dfa410c51eaede4485",
  measurementId: "G-Q846BCVTND"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();