# FireBase User Creation - Login Page
---
 Here i have made a simple authantication system using Firebase , 

## setup :

The set up is very simple , 

1. Create a file index.html which works as the main login page / sign up page for the authantication system !

2. create anothe file app.js/registrer.js/login.js , this file will conatin all the firebase connectivity code !

### Here is the basic template for the userCreation :

    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

### Here is the basic template for the signinUser :

    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

⭐ Support

    If you like this project, consider giving it a star ⭐ on GitHub!