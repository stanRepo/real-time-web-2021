export default function (socket) {
  socket.on("bluffResult", (obj) => {
    if (obj.result === true) {
      console.log(`Player with ID ${obj.player} has WON the game`);
    } else {
      console.log(`Player with ID ${obj.player} has LOST the game`);
    }
  });
}
