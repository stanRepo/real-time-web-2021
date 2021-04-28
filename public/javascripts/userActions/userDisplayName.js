export default function (socket) {
  const input = document.querySelector("#inputDisplayName");
  const btn = document.querySelector("#confirmUsernameBtn");
  const fieldset = document.querySelector("#inputDisplayNameFieldSet");
  const nameField = fieldset.querySelector('#myName')
const userNameEl = document.querySelector("#inputDisplayNameFieldSet > h1") 
const myID = document.querySelector("#myID").innerHTML
 const storedUsername = localStorage.getItem(myID)

 console.log(storedUsername)
 // check if a usernme was previuously stored
 if(storedUsername){
   console.log(myID)
   fieldset.innerHTML = `<h1>${storedUsername}</h1>`
   socket.emit('updateMyUsername', storedUsername)
 }else{
   if(btn){
     btn.addEventListener("click", (e) => {
       if (input.value.length >= 3) {
         socket.emit("changeUsername", input.value);
         input.style = "hidden";
         btn.style = "hidden";
         fieldset.innerHTML = `<h1>${input.value}</h1>`;
       }
     });
  
   }

 }


}
