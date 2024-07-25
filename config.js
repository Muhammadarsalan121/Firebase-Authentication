
 
 
  
   // Import the functions you need from the SDKs you need
   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
   import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
     apiKey: "AIzaSyC980WH59p1HMn5JlWwjsyfOMeXzBq0wFA",
     authDomain: "authenticate-firebase1212.firebaseapp.com",
     projectId: "authenticate-firebase1212",
     storageBucket: "authenticate-firebase1212.appspot.com",
     messagingSenderId: "466349963538",
     appId: "1:466349963538:web:a8a96571cdbd6eea2e9bcb",
     measurementId: "G-WLM10ECMGD"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
