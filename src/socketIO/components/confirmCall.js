const nextPlayerTurn = require("./nextPlayerTurn.js");

exports.call = function (socket, socketID, game, io) {
  socket.on("confirmCall", (obj) => {
    if (game.currentBet) {
      // check if previous bet exists
      if (game.currentBet.diceHowMany >= obj.diceHowMany) {
        console.log("STATUS: false INPUT ");
        socket.emit("falseDiceInput", game.currentBet);
        // false input. Must be higher then previous bet
        // send msg to thisPlayerTurn requesting new Input
      } else {
        console.log("STATUS: correct INPUT ");
        // correct input
        // go to nextPlayerTurn
        game.currentBet = obj;
        io.emit("playingFieldUpdate", {
          status: "changeCurrentBet",
          currentBet: game.currentBet,
        });
      }
    } else {
      // this is the first Bet
      console.log("this was the first bet. Going to next player");
      game.currentBet = obj;
      // go to nextPlayerTurn
      io.emit("playingFieldUpdate", {
        status: "changeCurrentBet",
        currentBet: game.currentBet,
      });
    }
    nextPlayerTurn.next(socket, socketID, game, io);
  });
};
