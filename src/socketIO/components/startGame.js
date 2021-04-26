// Concerning the wrapping function of this file
// as soon as it has fired once:
// send every player their unique hand
// update all players of the status that the game has started



const setTurn = require("./setTurn.js");
const createHand = require("./createHand.js");
const selectStartingPlayer = require("./selectStartingPlayer.js");

exports.startGame = function (socket, socketID, game, io) {
  console.log("-----startGame-----");
  const startingPlayer = selectStartingPlayer.select(game); // select player with first turn (first player in game.playersInRoom)
  game.thisPlayerTurn = startingPlayer; // save in memory
  game.status = "hasStarted"; // set game status

  // send everyone their unique hand
  const arr = Object.entries(game.playersInRoom);
  arr.forEach((player) => {
    const thisHand = createHand.createHand(game, socketID); // hand toegevoegd aan speler
    player[1].hand = thisHand// add hand to game obj
    const currentPlayerSocket = player[1].currentSocket; // just for readability of next lines // currentSocket = the socketID which has the socket connection to the server
    io.to(currentPlayerSocket).emit("newHand", thisHand); // sendHand
  });
  io.emit("startGame", game.thisPlayerTurn); // start game
};
