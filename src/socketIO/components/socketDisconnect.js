// on disconnect:
// 
// 1. send a UI update to players in the room
// 2. if this player had the turn then pass on the turn to the next player

const nextPlayer = require('./nextPlayerTurn.js')

exports.disconnect = function (socket, socketID, readyPlayers, io, game) {
  socket.on("disconnect", () => {
    console.log(`user disconnected ID: ${socketID}`);

    io.emit("playerLeft", socketID);
    delete game.playersInRoom[socketID]
    readyPlayers.pop()
    console.log(game.status)
    console.log(game.thisPlayerTurn)
    console.log(socketID)
    if(game.thisPlayerTurn === socketID && game.status === "hasStarted"){
nextPlayer.next(socket, socketID, game, io)
    }
  });
};
