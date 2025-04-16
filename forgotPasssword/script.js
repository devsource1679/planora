// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzAgywPLaEHtnSOzocjKuVFPetlkLCZq8",
    authDomain: "instablog-b09e0.firebaseapp.com",
    projectId: "instablog-b09e0",
    storageBucket: "instablog-b09e0.firebasestorage.app",
    messagingSenderId: "74456260023",
    appId: "1:74456260023:web:4863b97a085c0396639c32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Auth
const auth = getAuth()

forgotForm.addEventListener("submit", resetPassword);

async function resetPassword(e) {
    e .preventDefault();
    let userEmail = email.value;
    try {
        await sendPasswordResetEmail(auth, userEmail);
        alert("Password reset link has been sent to your email")
    } catch (error) {
        console.log(error);
        
    }
}