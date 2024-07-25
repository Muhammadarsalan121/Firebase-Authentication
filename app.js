import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";


const Form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')




Form.addEventListener('submit',(event)=>{
  event.preventDefault()
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    console.log(userCredential)
    alert('You have sucessfully Registered')
      window.location="login.html"
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    console.log(errorMessage);
    alert('Error')
    // ..
  });
})