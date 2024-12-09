// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCd5gThiGaEJYtzlenmwXWNX_zasEVpaag",
    authDomain: "university-note-sharing.firebaseapp.com",
    projectId: "university-note-sharing",
    storageBucket: "university-note-sharing.firebasestorage.app",
    messagingSenderId: "234086158642",
    appId: "1:234086158642:web:41c852725095f1bde0872b",
    measurementId: "G-3STJ77E4DK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
