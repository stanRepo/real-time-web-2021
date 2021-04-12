exports.startGame = function (socket, socketID, game, io) {
  console.log("starting.....");
  socket.emit("startGame");
  console.log(game);
  const startingPlayer = selectRandomPlayer(game);
  game.thisPlayerTurn = startingPlayer;

  const arr = Object.entries(game.playersInRoom);

  arr.forEach((player, i) => {
    console.log(player[1].playerID);
    const thisHand = createHand(game, player[1].playerID); // hand toegevoegd aan speler

    const currentPlayerSocket = player[1].currentSocket; //
    console.log("----");
    console.log(currentPlayerSocket);
    console.log(socketID);
    console.log(thisHand);

    io.to(currentPlayerSocket).emit("newHand", thisHand);
    console.log(`hand was send to: ${currentPlayerSocket} `);
    console.log("----");
  });
};

function createHand(game, socketID) {
  return (game.playersInRoom[socketID].hand = [
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
    Math.floor(Math.random() * 6) + 1,
  ]);
}

function selectRandomPlayer(game) {
  const arrOfPlayers = Object.entries(game.playersInRoom);
  const numberOfPlayers = arrOfPlayers.length;
  const randomN = Math.floor(Math.random() * numberOfPlayers);
  const selectedPlayer = arrOfPlayers[randomN];
  console.log(`starting player ID: ${selectedPlayer[1].playerID}`);
  return selectedPlayer;
}
