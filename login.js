import {  signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";





const Form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')


Form.addEventListener("submit" , (event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    window.location = "home.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    alert('Error')
  });

})