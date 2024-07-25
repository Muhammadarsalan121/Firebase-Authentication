  // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyADCWpp3JMpgXKqxUk3y1tlPoYLNqDUfNE",
    authDomain: "authenticate-firebase121.firebaseapp.com",
    projectId: "authenticate-firebase121",
    storageBucket: "authenticate-firebase121.appspot.com",
    messagingSenderId: "342164087266",
    appId: "1:342164087266:web:fdbbb7579ada362551d9bb",
    measurementId: "G-JNEDJSZCXT"
  };

  // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
