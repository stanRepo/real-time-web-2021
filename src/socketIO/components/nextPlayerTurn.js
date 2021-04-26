
// Contents of this file:
//
// This keeps track of the players who have had their turn
// When a player has ended their turn this file (function) will be called
// In order to select the right player a few things are assessed.
// 1. Who just ended their turn?
// 2. if :Is there another player who didn't have their turn yet?
// if TRUE: pass the turn on to that player
// if FALSE: lets say we're at player 3. return to the player who had the first turn.



exports.next = function (socket, socketID, game, io) {

// // define who is the next player
const arrOfPlayers = Object.entries(game.playersInRoom); // iterateable list of players
const indexPrevPlayer = arrOfPlayers.findIndex(checkIndex)

function checkIndex(player){
  return player[0]=== game.thisPlayerTurn
}

  game.prevPlayer = game.thisPlayerTurn; // current (not the next) player // store for later use

  // // check if we need to recycle the player turns (everyone had their turn, start over)
  
  if(arrOfPlayers[indexPrevPlayer +1] === undefined){
    game.thisPlayerTurn = arrOfPlayers[0][0]
  } else{
    console.log(arrOfPlayers[indexPrevPlayer +1]);
    console.log(indexPrevPlayer)
    game.thisPlayerTurn = arrOfPlayers[indexPrevPlayer +1][0]
  }

    io.emit("nextPlayerTurn", game.thisPlayerTurn); // start next turn

};
