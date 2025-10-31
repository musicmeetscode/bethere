// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, onValue } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC8b6RjUd3FXn62WMEUH0EPJwaWrwjTFhc",
    authDomain: "devfestdp.firebaseapp.com",
    projectId: "devfestdp",
    storageBucket: "devfestdp.firebasestorage.app",
    messagingSenderId: "1031650496039",
    appId: "1:1031650496039:web:a3ba444f89edaa50fe0802",
    measurementId: "G-H5STDW4TS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)

export { database, ref, push, onValue }