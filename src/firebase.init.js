// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBj21nUGh1OxezPqH-Qx2H_G3zGqua6j5U",
    authDomain: "rakip-s-photography.firebaseapp.com",
    projectId: "rakip-s-photography",
    storageBucket: "rakip-s-photography.appspot.com",
    messagingSenderId: "380731496536",
    appId: "1:380731496536:web:8ec593e2dd3760bd83d22d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

