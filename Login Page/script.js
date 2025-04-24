  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
  import { getAuth,  signInWithEmailAndPassword,onAuthStateChanged ,signOut } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
  ;

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


signInForm.addEventListener("submit", signInUser);


// signOutBtn.addEventListener("click", signOutUser);


// async function signOutUser() {
//     try {
//         await signOut(auth);  
//         alert("Sign out successful"); 
//     } catch (error) {
//         console.log(error); 
//     }
// }


async function signInUser(e) {
    e.preventDefault(); 
    const spinner = document.getElementById("spinner"); 

    try {
        const { email, password } = signInForm; 
        spinner.style.visibility = 'visible';
       
        let user = {
            email: email.value,  
            password: password.value,  
        }
        await signInWithEmailAndPassword(auth, user.email, user.password); 
        alert("Sign In successful");
        
        spinner.style.visibility = 'hidden';

        setTimeout(() => {
            window.location.href = `../dashboard`;
        }, 1000);
    } catch (error) {
        
        console.log(error.message);

      
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
            
            errorP.textContent = "Invalid email/password.";
        }
    }

   
}


onAuthStateChanged(auth, (user) => {
    if (user) {
        
        console.log(user);
    } else {
       
        console.log("No one is currently signed in.");
    }
});
