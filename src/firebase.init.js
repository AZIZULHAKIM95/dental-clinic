// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoa0HmV5IDoXNZjPFhN3LuOj-Kz5sA5YY",
    authDomain: "dental-assignment-10-app.firebaseapp.com",
    projectId: "dental-assignment-10-app",
    storageBucket: "dental-assignment-10-app.appspot.com",
    messagingSenderId: "288675647404",
    appId: "1:288675647404:web:15e104b8d0ae4ad4fa7409"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth