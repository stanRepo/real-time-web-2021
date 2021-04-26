import userDisplayName from "./userDisplayName.js";

export default function (socket) {
  const readyUpBtn = document.querySelector("#readyUpBtn");
  const callBtn = document.querySelector("#callBtn");
  const bluffBtn = document.querySelector("#bluffBtn");
  const arr = [readyUpBtn, callBtn, bluffBtn];

  const socketID = document.cookie;

  userDisplayName(socket); // listen for user input and react

  arr.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target === readyUpBtn) {
        if (e.target.getAttribute("data-name") === "ready") {
          setUnready(e, socket, socketID);
          console.log(`UNREADY - userID = ${socketID}`);
        } else {
          setReady(e, socket, socketID);
          console.log(`READY - userID = ${socketID}`);
        }
      }
    });
  });
}

function setReady(e, socket, socketID) {
  e.target.setAttribute("data-name", "ready"); // set user to READY
  e.target.setAttribute("value", "Waiting for other players to be ready");
  e.target.classList.add("green");
  e.target.classList.remove("red");
  socket.emit("playerReady", socketID);
}
function setUnready(e, socket, socketID) {
  // set user to UNREADY
  e.target.setAttribute("data-name", "notready");
  e.target.setAttribute("value", "Click when you are ready");
  e.target.classList.add("red");
  e.target.classList.remove("green");
  socket.emit("playerNotReady", socketID);
}
