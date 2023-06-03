// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBGgKsN-IJa_R9QDNuN4iXlZbtX-PcOxWk",
    authDomain: "lab4-2afe7.firebaseapp.com",
    projectId: "lab4-2afe7",
    storageBucket: "lab4-2afe7.appspot.com",
    messagingSenderId: "1046680759657",
    appId: "1:1046680759657:web:bcfdf28cf4cb24962fe1f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const fireStore = getFirestore(app);