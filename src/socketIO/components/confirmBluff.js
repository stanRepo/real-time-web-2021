exports.bluff = function (socket, socketID, game, io) {
  socket.on("confirmBluff", () => {
    // count all hands. {1:n,2:n,3:n} etc
    const currentBet = game.currentBet;
    console.log("---------------------PLAYERS IN ROOM  ");
    console.log(game);

    const players = Object.entries(game.playersInRoom);
    const playersAndTheirHand = players.map((player) => {
      console.log(player);
      return { id: player[1].playerID, hand: player[1].hand };
    });
    console.log(playersAndTheirHand);

    let totals = {};
    const record = playersAndTheirHand.map((player) => {
      // loop through players
      const arr = player.hand.map((dice) => {
        // loop through hand
        dice = dice.toString();
        if (totals[dice]) {
          totals[dice]++;
        } else {
          totals[dice] = 1;
        }
      });
      return arr;
    });
    console.log(totals);

    if (
      totals[game.currentBet.whichDice] < totals[game.currentBet.diceHowMany]
    ) {
      console.log("bluff was right");
      console.log(`Player with ID: ${game.thisPlayerTurn} has WON the Bluff`);
      io.emit("bluffResult", {
        result: true,
        player: game.thisPlayerTurn,
      });
    } else {
      console.log("bluff was wrong");
      console.log(`Player with ID: ${game.prevPlayer} has LOST the Bluff`);
      io.emit("bluffResult", { result: false, player: game.prevPlayer });
    }
  });
};
