exports.checkPlayerNEW_EXIST = function (socket, socketID, game) {
  //console.log(game.playersInRoom[socketID]);
  if (game.playersInRoom[socketID]) {
    // check if socketID is from existing user
    console.log("existing player, updating currentSocket of player");
    game.playersInRoom[socketID].currentSocket = socket.id; // refresh currentSocket
  } else {
    // add new player
    console.log("new player");
    // console.log(game.playersInRoom[socketID]);
    //const sanitizeSocketID = socketID.replace(/[^a-zA-Z ]/g, ""); // filter out special charactes
    game.playersInRoom[socketID] = {
      playerID: socketID,
      currentSocket: socket.id,
    };
  }
  // console.log("players:");
  // console.log(game.playersInRoom);
};
