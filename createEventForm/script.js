// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import { getFirestore, collection, addDoc, query, where, getDocs, serverTimestamp,} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// import emailjs from 'https://cdn.emailjs.com/dist/email.min.js';
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




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, "usersData");


// // Generate token
// function generateToken() {
//   const time = Date.now().toString(36);
//   const rand = Math.random().toString(36).substring(2, 8);
//   return `EVT-${time}-${rand}`.toUpperCase();
// }

// function sendConfirmationEmail(name, email, token) {
//   emailjs.send("service_p2e48za", "", {
//     name: name,
//     email: email,
//     token: token
//   })
//   .then((response) => {
//     console.log("Email sent:", response.status);
//     alert("Registration successful! Check your email for your event ID.");
//   })
//   .catch((error) => {
//     console.error("Email error:", error);
//     alert("Registered, but email failed to send.");
//   });
// }
// Handle form submission

document.getElementById("registrationForm").addEventListener  
  ("submit", async function(event) {
  event.preventDefault();

  const spinner = document.getElementById("spinner");
  
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const eventType = document.getElementById("eventType").value;
  const eventDate = document.getElementById("eventDate").value;
  const eventTime = document.getElementById("eventTime").value;

  if (!name || !email || !phone || !eventDate || !eventTime) {
    alert("All fields are required!");
   
    return;
  }

  
  // const token = generateToken(); // ✅ Generate the token here


  spinner.style.visibility = 'visible';

  const registration = {
    name,
    email,
    phone,
    eventType,
    eventDate,
    eventTime,
    token,
    timestamp: serverTimestamp()
  };



  try {
   

    await addDoc(colRef, registration);
    alert("Registration successful!");
    document.getElementById("registrationForm").reset();
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Failed to register. Please try again.");

    
  } finally{
    
    spinner.style.visibility = 'hidden'; 
  }
});


