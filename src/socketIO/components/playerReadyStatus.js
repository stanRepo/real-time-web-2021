const startGame = require("./startGame.js");

exports.playerReadyStatus = function (
  socket,
  socketID,
  game,
  readyPlayers,
  io
) {
  socket.on("playerReady", (socketID) => {
    console.log(`player is ready. ID: ${socketID}`);
    game.playersInRoom[socketID].status = "ready";
    readyPlayers.push(socketID); // store status
    // console.log(Object.keys(game.playersInRoom).length);
    console.log(readyPlayers);
    console.log(readyPlayers.length);
    console.log(Object.keys(game.playersInRoom).length);
    if (readyPlayers.length === Object.keys(game.playersInRoom).length) {
      //  check if all players are ready
      console.log("all players ready START GAME");
      startGame.startGame(socket, socketID, game, io);
    }
  });
  socket.on("playerNotReady", (socketID) => {
    console.log(`player is not ready. ID: ${socketID}`);
    game.playersInRoom[socketID].status = "unready";
    readyPlayers.pop();
  });
};
