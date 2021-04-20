const setTurn = require("./setTurn.js");
const createHand = require("./createHand.js");
const selectStartingPlayer = require("./selectStartingPlayer.js");

exports.startGame = function (socket, socketID, game, io) {
  console.log("-----startGame-----");

  const startingPlayer = selectStartingPlayer.select(game); // select player with first turn

  game.thisPlayerTurn = startingPlayer; // save in memory
  game.status = "hasStarted"; // set game status

  // send everyone their unique hand
  const arr = Object.entries(game.playersInRoom);

  arr.forEach((player, i) => {
    const thisHand = createHand.createHand(game, player[1].playerID); // hand toegevoegd aan speler
    const currentPlayerSocket = player[1].currentSocket; // just for readability of next lines // currentSocket = the socketID which has the socket connection to the server
    io.to(currentPlayerSocket).emit("newHand", thisHand); // sendHand
  });
  io.emit("startGame", game.thisPlayerTurn); // start game
};
