import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxh2Pan3vaD7yeEmpOMzBwEHnfcsQFX1Q",
  authDomain: "loginpage-a8025.firebaseapp.com",
  projectId: "loginpage-a8025",
  storageBucket: "loginpage-a8025.firebasestorage.app",
  messagingSenderId: "571155439798",
  appId: "1:571155439798:web:bc26638f2a6bd724984617",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("User created!");
    })
    .catch((error) => {
      alert(error.message);
    });
});
