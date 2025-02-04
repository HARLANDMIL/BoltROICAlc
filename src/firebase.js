// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB95pDIO7jxgO7Y-8vU5yt6XG4gMCaPGb4KEY",
    authDomain: "an-roi-calculator.firebaseapp.com",
    projectId: "an-roi-calculator",
    storageBucket: "an-roi-calculator.firebasestorage.app",
    messagingSenderId: "864291140529",
    appId: "1:864291140529:web:cd828f77ad193bc1294390",
    measurementId: "G-RH2PW1J66R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);

export { db };