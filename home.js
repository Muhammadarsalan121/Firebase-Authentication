import { signOut ,  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { collection, addDoc, getDocs, doc, deleteDoc,updateDoc,Timestamp,} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 
import { auth, db } from "./config.js";


const inputData = document.querySelector('#input');
const logoutbtn = document.querySelector('#logout-btn');
const form = document.querySelector('#form');
const ul = document.querySelector('#ul')
const select = document.querySelector("#select");

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
  const querySnapshot = await getDocs(collection(db, "User Data"));
  querySnapshot.forEach((doc) => {
    arr.push({ ...doc.data(), id: doc.id });
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
    <li>${item.inputData}
    <button class="deleteBtn">Delete</button>
        <button class="editBtn">Edit</button>
    </li>
    `
  });
  const deleteBtn = document.querySelectorAll(".deleteBtn");
const editBtn = document.querySelectorAll(".editBtn");
  deleteBtn.forEach((btn01, index) => {
    btn01.addEventListener("click", async () => {
      console.log(arr[index]);
      await deleteDoc(doc(db, "User Data", arr[index].id));
      console.log("Data deleted");
      arr.splice(index, 1);
      renderValue();
    });
  });
  editBtn.forEach((btn02, index) => {
    btn02.addEventListener("click", async () => {
      const updatedNewValue = prompt("enter new value");
      const ValueUpdate = doc(db, "User Data", arr[index].id);
      await updateDoc( ValueUpdate, {
        inputData: updatedNewValue,
      });
      console.log("Data updated");
      arr[index].inputData = updatedNewValue;
      renderValue();
    });
  });
}

 

form.addEventListener('submit', async (event)=>{
  event.preventDefault();
  try {
    const docRef = await addDoc(collection(db, "User Data"), {
      inputData: inputData.value,
      city: select.value,
      time: Timestamp.fromDate(new Date()),
    });
    console.log("Document written with ID: ", docRef.id);
  arr.push({
    inputData: inputData.value,
    city: select.value,
    id: docRef.id,
  })
  renderValue()
    inputData.value = " ";
  } catch (e) {
    console.error("Error adding document: ", e);
  }

})
