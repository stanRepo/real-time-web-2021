export default function (socket) {
  socket.on("playerLeft", (socketID) => {
    const playerWhoLeft = document.getElementById(`playerID${socketID}`);
    if (playerWhoLeft) {
      // check if player was rendered
      playerWhoLeft.parentElement.removeChild(playerWhoLeft);
    }
  });
}
