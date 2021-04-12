export default function (socket) {
  socket.on("startingPlayer", (startingPlayer) => {
    console.log(startingPlayer);
  });
}
