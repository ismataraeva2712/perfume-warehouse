// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrGqnwug3yglpLiCm4c-V0LfSQLXfsC2g",
    authDomain: "perfumes-project.firebaseapp.com",
    projectId: "perfumes-project",
    storageBucket: "perfumes-project.appspot.com",
    messagingSenderId: "507548892647",
    appId: "1:507548892647:web:b9b245aabd0a19e61d5142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;