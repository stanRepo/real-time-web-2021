exports.next = function (socket, socketID, game, io) {
  console.log("----------------------");
  // define who is the next player

  const prevPlayer = game.thisPlayerTurn; // current (not the next) player

  const arrOfPlayers = Object.entries(game.playersInRoom);
  const playersAvailable = game.playersWhoHadTheirTurn.map((played) => {
    let temp;

    arrOfPlayers.forEach((player) => {
      if (played !== player[1].playerID) {
        console.log(played);
        console.log(player[1].playerID);
        temp = player[1].playerID;
      }
    });
    return temp;
  });
  console.log(`Players Available ${playersAvailable}`);
  game.nextPlayerTurn = playersAvailable[0];

  game.thisPlayerTurn = playersAvailable[0];
  io.emit("nextPlayerTurn", game.thisPlayerTurn); // start next turn
};
