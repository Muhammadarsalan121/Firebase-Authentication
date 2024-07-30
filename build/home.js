import { signOut ,  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 
import { auth, db } from "./config.js";


const inputData = document.querySelector('#input');
const logoutbtn = document.querySelector('#logout-btn');
const form = document.querySelector('#form');
const ul = document.querySelector('#ul')
const arr = []


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

async function getData(){
  const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(doc.data())
  arr.push(doc.data());;
});
console.log(arr);
renderValue();

}
getData()

function renderValue(){
  ul.innerHTML = " ";
  if(arr.length === 0){
    ul.innerHTML = " No Data Found "
    return;
  }
  arr.map((item)=>{
    ul.innerHTML +=`
    <li>${item.inputData}</li>
    `
  });
}


form.addEventListener('submit', async (event)=>{
  event.preventDefault();
  arr.push({
    inputData: inputData.value
  })
  renderValue()
  try {
    const docRef = await addDoc(collection(db, "User Data"), {
      inputData: inputData.value
    });
    inputData.value = " ";
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

})
