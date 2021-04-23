exports.next = function (socket, socketID, game, io) {
  console.log("----------------------");
  // define who is the next player
  game.prevPlayer = game.thisPlayerTurn; // current (not the next) player // store for later use
  const arrOfPlayers = Object.entries(game.playersInRoom); // iterateable list of players

  console.log(game);
  const indexPrevPlayer = arrOfPlayers.findIndex((player) => {
    player === game.prevPlayer;
  });

  // check if we need to recycle the player turns (everyone had their turn, start over)
  if (
    arrOfPlayers[indexPrevPlayer + 1] >
    Object.entries(game.playersInRoom).length
  ) {
    game.nextPlayerTurn = arrOfPlayers[0]; // if TRUE then set the next player to the first player in line
  } else {
    game.nextPlayerTurn = arrOfPlayers[indexPrevPlayer + 1]; // if FALSE then go to next player in line
  }
  game.thisPlayerTurn = game.nextPlayerTurn; // set the currentPlayer in game object
  console.log(`${game.nextPlayerTurn[0]}`);

  io.emit("nextPlayerTurn", game.nextPlayerTurn[0]); // start next turn
};
