import startTurn from "./startTurn.js";

export default function (socket) {
  socket.on("startGame", (startingPlayer) => {
    console.log("startGame fired On Client");
    deleteReadyBtn();
    startTurn(socket, startingPlayer);
  });
}
function deleteReadyBtn() {
  const readyBtn = document.querySelector("#readyUpBtn");
  readyBtn.classList.add("hidden");
}
