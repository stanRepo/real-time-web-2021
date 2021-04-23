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
  const readyText = document.querySelector("#readyText");
  readyText.classList.add("hidden");
  readyBtn.classList.add("hidden");
}
