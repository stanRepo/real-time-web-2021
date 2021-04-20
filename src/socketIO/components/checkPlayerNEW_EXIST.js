exports.checkPlayerNEW_EXIST = function (socket, socketID, game) {
  if (game.playersInRoom[socketID]) {
    // check if socketID is from existing user
    console.log("existing player, updating currentSocket of player");
    game.playersInRoom[socketID].currentSocket = socket.id; // refresh currentSocket
  } else {
    // add new player
    console.log("new player");

    game.playersInRoom[socketID] = {
      playerID: socketID,
      currentSocket: socket.id,
    };
  }
};
