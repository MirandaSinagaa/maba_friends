// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Konfigurasi Firebase Anda
const firebaseConfig = {
    apiKey: "AIzaSyDnrVWppWV9gPAr1aWJCzHajWarM4IHAjQ",
    authDomain: "mabafriends-6a0f4.firebaseapp.com",
    projectId: "mabafriends-6a0f4",
    storageBucket: "mabafriends-6a0f4.appspot.com",
    messagingSenderId: "377020192560",
    appId: "1:377020192560:web:84d9a2037605b13fb09af5",
    measurementId: "G-9B5LBFDWT6"
  };    

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi layanan Firebase
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };