exports.checkPlayerNEW_EXIST = function (socket, socketID, game, io) {
  if (game.playersInRoom[socketID]) {
    // check if socketID is from existing user
    console.log("existing player, updating currentSocket of player");
    game.playersInRoom[socketID].currentSocket = socket.id; // refresh currentSocket

    // join game / cue
    // socket.emit("newHand", game.playersInRoom[socketID].hand); // sendHand


if(game.currentBet !== undefined){

  socket.emit("playingFieldUpdate", { // add currentBet to UI
    status: "changeCurrentBet",
    currentBet: game.currentBet,
    playerWhoMadeThisBet: game.thisPlayerTurn
  });
}
  } else {
    // add new player
    console.log("new player");

    game.playersInRoom[socketID] = {
      playerID: socketID,
      currentSocket: socket.id,
    };
  }
  io.emit("playersInRoom", game.playersInRoom);
};
