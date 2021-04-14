import startTurn from "./startTurn.js";

export default function (socket) {
  socket.on("startGame", (startingPlayer) => {
    deleteReadyBtn();
    startTurn(socket, startingPlayer);
  });
}
function deleteReadyBtn() {
  const readyBtn = document.querySelector("#currentBet > header");
  readyBtn.classList.add("hidden");
}
