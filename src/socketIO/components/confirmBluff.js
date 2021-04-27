// About this File:
//
// This function is called on when a player who's turn it is states that the currentBet does not appear on the playingField.
// a.k.a. the sum of diceheads !includes currentBet's diceheads
//
// So what the code here does is:
// 1. I'm summing up the number of diceheads per dicehead in the object totals. so every possible dicehead is a property that has a value that the number of times that dicehead appears in each players hand.
// 2. if statement: ()
// If the summed up number of diceheads is smaller than the currentBet
// if TRUE: the player who made the currentBet was wrong so he lost. the player who performed the bluff button is right
// if FALSE: the player who made the currentBet was right so he won. The player who performed the bluff button is wrong.
//
// 3. Emit back to clients and pass along the the current player (the one who called the bluff) and the result (wheter he was right or wrong)
// 4. TODO: restart the game


const gameReset = require('./gameReset.js')

exports.bluff = function (socket, socketID, game, io) {
  socket.on("confirmBluff", () => {
    // count all hands. {1:n,2:n,3:n} etc

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
    try{
      
      console.log(totals);
      console.log(
        `Bet: The dicehead we are looking for: ${
          totals[game.currentBet.whichDice]
        }`
        ); // Bet: The dicehead we are looking for
        console.log(
          `Bet: how many times it should be in the game: ${
            totals[game.currentBet.diceHowMany]
          }`
          ); // Bet: how many times it should be in the game
          
          // If the summed up number of diceheads is smaller than the currentBet
          // if TRUE: the player who made the currentBet was wrong so he lost. the player who performed the bluff button is right
          // if FALSE: the player who made the currentBet was right so he won. The player who performed the bluff button is wrong.
          
          if (totals[game.currentBet.whichDice] < game.currentBet.diceHowMany) {
            // bluff =  right when the person who clicked bluff was right in stating that the currentbet is false
            console.log("bluff was right.  sum(hands) !== currentBet");
            console.log(`Player with ID: ${game.thisPlayerTurn} has WON the Bluff`);
            io.emit("bluffResult", {
        playerWhoWon: game.thisPlayerTurn,
        playerWhoLost: game.prevPlayer
      });
    } else {
      // bluff = wrong when the person who clicked bluff was wrong in stating that the currentbet is false
      console.log("bluff was wrong.  sum(hands) === currentBet");
      console.log(`Player with ID: ${game.prevPlayer} has LOST the Bluff`);
      io.emit("bluffResult", {  playerWhoWon: game.prevPlayer, playerWhoLost:game.thisPlayerTurn });
    }
    gameReset.reset(socket,game,io)
  } catch{
    
  }
  });
};
