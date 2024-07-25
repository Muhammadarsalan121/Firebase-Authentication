import { signOut ,  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";



const logoutbtn = document.querySelector('#logout-btn');
// const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
     window.location="login.html"
    }
  });

logoutbtn.addEventListener("click" , ()=>{
    signOut(auth).then(() => {
        window.location = "login.html"
      }).catch((error) => {
        alert('Error Occured')
      });
      
})