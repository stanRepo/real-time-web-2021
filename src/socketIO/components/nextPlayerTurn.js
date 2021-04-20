exports.next = function (socket, socketID, game, io) {
  console.log("----------------------");
  // define who is the next player
  game.prevPlayer = game.thisPlayerTurn; // current (not the next) player // store for later use
  const arrOfPlayers = Object.entries(game.playersInRoom); // iterateable list of players

  const indexPrevPlayer = arrOfPlayers.findIndex((player) => {
    player === game.prevPlayer;
  });

  if (
    arrOfPlayers[indexPrevPlayer + 1] >
    Object.entries(game.playersInRoom).length
  ) {
    game.nextPlayerTurn = arrOfPlayers[0];
  } else {
    game.nextPlayerTurn = arrOfPlayers[indexPrevPlayer + 1];
  }

  console.log(`${game.nextPlayerTurn[0]}`);

  io.emit("nextPlayerTurn", game.nextPlayerTurn[0]); // start next turn
};
