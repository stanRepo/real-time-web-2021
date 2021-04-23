exports.select = function (game) {
  const arrOfPlayers = Object.entries(game.playersInRoom);

  const numberOfPlayers = arrOfPlayers.length;

  const randomN = Math.floor(Math.random() * numberOfPlayers);

  const selectedPlayer = arrOfPlayers[randomN];

  console.log(`starting player ID: ${selectedPlayer[1].playerID}`);

  return selectedPlayer[1].playerID;
};
