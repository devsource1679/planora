
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore,collection,getDoc,doc,} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { getAuth,createUserWithEmailAndPassword, sendEmailVerification,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyD3p6BY8H74GrfoHWt0jfUZrhzoBdTYEB4",
    authDomain: "planora-67d43.firebaseapp.com",
    projectId: "planora-67d43",
    storageBucket: "planora-67d43.firebasestorage.app",
    messagingSenderId: "224654990289",
    appId: "1:224654990289:web:3c26e564611251ece09ef0"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

// const db = getFirestore(app);

const db = getFirestore();

const colRef = collection(db, "usersData")


onAuthStateChanged(auth, async (user) => {
    console.log("User UID:", user.uid)
    if (user) {
      const docRef = doc(db, "usersData", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        document.getElementById("greeting").textContent = `Hello, ${data.name}!`;
      }
    }
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
});


// document.getElementById("myActionBtn").addEventListener("click", () => {
//   checkUserAuthentication(() => {
//     // Put your protected action here
//     console.log("User is logged in. Performing protected action...");
//     // Example: show dashboard, open modal, etc.
//   });
// });

function navigate () {
  window.location.href="../createEvent"
}

document.getElementById("goToPageBtn")

