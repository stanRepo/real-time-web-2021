const setTurn = require("./setTurn.js");
const createHand = require("./createHand.js");
const selectStartingPlayer = require("./selectStartingPlayer.js");

exports.startGame = function (socket, socketID, game, io) {
  console.log("starting.....");

  // send everyone their unique hand
  const arr = Object.entries(game.playersInRoom);
  arr.forEach((player, i) => {
    const thisHand = createHand.createHand(game, player[1].playerID); // hand toegevoegd aan speler
    const currentPlayerSocket = player[1].currentSocket;
    // sendHand
    io.to(currentPlayerSocket).emit("newHand", thisHand);
  });

  // start game
  const startingPlayer = selectStartingPlayer.select(game); // select player with first turn
  console.log(startingPlayer);
  game.thisPlayerTurn = startingPlayer;
  io.emit("startGame", game.thisPlayerTurn);
};
