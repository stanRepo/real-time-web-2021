const nextPlayerTurn = require("./nextPlayerTurn.js");

exports.call = function (socket, socketID, game, io) {
  socket.on("confirmCall", (obj) => {
let name = "" // changing currentBet displayname from PlayerID to playerDisplayName
if(game.playersInRoom[socketID].playerDisplayName){
name = game.playersInRoom[socketID].playerDisplayName
} else{
  name = socketID
}
    
    
    console.log('confirmCallFired')
    console.log(obj)
    if (game.currentBet) {
      // check if previous bet exists
      if (game.currentBet.diceHowMany >= obj.diceHowMany) { // check if bet is higher than previous bet
        console.log("STATUS: false INPUT ");

        console.log(`currentBet diceHowMany: ${game.currentBet.diceHowMany}`)
        console.log(`bet from call: ${obj.diceHowMany}`)
        socket.emit("falseDiceInput", game.currentBet);
        // false input. Must be higher then previous bet
      // restart this turn

        nextPlayerTurn.next(socket, socketID, game, io, false );
      } else {
        console.log("STATUS: correct INPUT ");
        // correct input
        // go to nextPlayerTurn
        game.currentBet = obj;
        io.emit("playingFieldUpdate", {
          status: "changeCurrentBet",
          currentBet: game.currentBet,
          playerWhoMadeThisBet: name,
          numberOfDice: game.numberOfDice
        });
        nextPlayerTurn.next(socket, socketID, game, io); // go to next player 
      }
    } else {
      // this is the first Bet
      console.log("this was the first bet. Going to next player");
      game.currentBet = obj;
      // go to nextPlayerTurn
      io.emit("playingFieldUpdate", {
        status: "changeCurrentBet",
        currentBet: game.currentBet,
        playerWhoMadeThisBet: name,
        numberOfDice: game.numberOfDice
      });
      nextPlayerTurn.next(socket, socketID, game, io); // go to next player
    }
  });
};
