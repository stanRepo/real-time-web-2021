import startTurn from "../gameActions/startTurn.js";

export default function (socket) {
  socket.on("nextPlayerTurn", (nextPlayerID) => {
    console.log(nextPlayerID);
    startTurn(socket, nextPlayerID);
  });
}
