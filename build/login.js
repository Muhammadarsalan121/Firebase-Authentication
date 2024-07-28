import {  signInWithEmailAndPassword , GoogleAuthProvider, signInWithPopup , GithubAuthProvider} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";





const Form = document.querySelector('#form')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const GoogleBtn = document.querySelector('.googleLogin-btn')
const GithubBtn = document.querySelector('.githubLogin-btn')


Form.addEventListener("submit" , (event)=>{
    event.preventDefault()
    signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
    window.location = "home.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    alert('Error')
  });

})


const googleProvider = new GoogleAuthProvider();
GoogleBtn.addEventListener('click',()=>{
  signInWithPopup(auth,googleProvider)
  .then((result) => {
  
    const user = result.user;
    console.log(user);
    window.location="home.html"
    
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    // ...
  });

})






const githubProvider = new GithubAuthProvider();

GithubBtn.addEventListener('click' , ()=>{

  signInWithPopup(auth, githubProvider )
    .then((result) => {
      const user = result.user;
      console.log(user);
      window.location='home.html'
     
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      
    });

})