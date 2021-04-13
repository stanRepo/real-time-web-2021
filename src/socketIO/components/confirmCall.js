const nextPlayerTurn = require("./nextPlayerTurn.js");

exports.call = function (socket, socketID, game, io) {
  socket.on("confirmCall", (obj) => {
    console.log(obj);
    console.dir(game);
    if (game.currentBet) {
      // check if previous bet exists
      if (game.currentBet.diceHowMany <= obj.diceHowMany) {
        // false input. Must be higher then previous bet
        // send msg to thisPlayerTurn requesting new Input
      } else {
        // correct input
        // go to nextPlayerTurn
      }
    } else {
      // this is the first Bet
      console.log("this was the first bet. Going to next player");
      game.currentBet = obj;
      // go to nextPlayerTurn
      nextPlayerTurn.next(socket, socketID, game, io);
    }
  });
};
