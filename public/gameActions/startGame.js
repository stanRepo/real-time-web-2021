import startTurn from "./startTurn.js";

export default function (socket) {
  socket.on("startGame", (startingPlayer) => {
    console.log(`The starting Player is${startingPlayer}`);
    startTurn(socket, startingPlayer);
  });
}
