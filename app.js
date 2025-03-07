// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtgpGjuoxHgmi2osPgNMPrpY6xZoHRIE0",
    authDomain: "fanshawe-fitness-tracker.firebaseapp.com",
    projectId: "fanshawe-fitness-tracker",
    storageBucket: "fanshawe-fitness-tracker.firebasestorage.app",
    messagingSenderId: "1067958995285",
    appId: "1:1067958995285:web:9dcb082ced070132d1c7dc"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign-up function
const signupForm = document.getElementById("signup-form");
if (signupForm) {
    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Signup successful! Please log in.");
                window.location.href = "login.html"; // Redirect to login page
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}

// Login function
const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                localStorage.setItem("user", JSON.stringify(userCredential.user));
                alert("Login successful!");
                window.location.href = "dashboard.html"; // Redirect to dashboard
            })
            .catch((error) => {
                alert(error.message);
            });
    });
}


