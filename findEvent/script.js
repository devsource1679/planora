// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import { getFirestore, collection, addDoc, query, where, getDocs, serverTimestamp} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3p6BY8H74GrfoHWt0jfUZrhzoBdTYEB4",
    authDomain: "planora-67d43.firebaseapp.com",
    projectId: "planora-67d43",
    storageBucket: "planora-67d43.firebasestorage.app",
    messagingSenderId: "224654990289",
    appId: "1:224654990289:web:3c26e564611251ece09ef0"
};

async function trackRegistration() {
    const email = document.getElementById("trackEmail").value.trim();
    if (!email) {
      // alert("Please enter your email to track your registration.");
      return;
    }
  
    const q = query(colRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
  
    if (!querySnapshot.empty) {
      const data = querySnapshot.docs[0].data();
      document.getElementById("trackingResult").innerText = 
        `Registered Name: ${data.name}, Phone: ${data.phone}, Event Date: ${data.eventDate}, Event Time: ${data.eventTime}`;
    } else {
      document.getElementById("trackingResult").innerText = "No registration found for this email.";
    }
  }
  
  // Hook track function to button if needed
  document.addEventListener("click", trackRegistration);
  