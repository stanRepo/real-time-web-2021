export default function (socket) {
  socket.on("playerLeft", (socketID) => {
    const playerWhoLeft = document.getElementById(`playerID${socketID}`);
    console.dir(socketID);
    console.dir(playerWhoLeft);
    playerWhoLeft.parentElement.removeChild(playerWhoLeft);
  });
}
