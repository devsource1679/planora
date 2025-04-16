
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore,collection,setDoc,doc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

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

const db = getFirestore(app);

const colRef = collection(db, "usersData")


const createUserAccount = async (e) => {
    e.preventDefault(); 
    const { name, email, password, confirmPassword } = signUpForm; 
    const spinner = document.getElementById("spinner");

  
    let userDetails = {
        name: name.value,          
        email: email.value,         
        password: password.value,   
    }
   
    try {

        spinner.style.visibility = 'visible';

        if (userDetails.password !== confirmPassword.value) { 
            throw new Error("Ensure password matches");
        }
        const userCred = await createUserWithEmailAndPassword(auth, userDetails.email, userDetails.password)
        const docRef = doc(colRef, userCred.user.uid);
        const docSnap = await setDoc(docRef, {
            name: userDetails.name,
            email: userDetails.email,
        });
       

    } catch (error) {
        console.log(error.message);

        if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
           
            errorP.textContent = "*Password should be at least 6 characters";
        }
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          
            errorP.textContent = "Email already exists.";
        }
        if (error.message === 'Ensure password matches') {
         
            errorP.textContent = "Ensure password matches";
        }
    }   finally {
        spinner.style.visibility = 'hidden';
    }

    alert("Sign Up successful"); 

    setTimeout(() => {
        window.location.href = `../dashboard`;
    }, 1000);
}

signUpForm.addEventListener("submit", createUserAccount);

