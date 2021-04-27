import userInput from "./userActions/input.js";

import playerLeft from "./userActions/playerLeft.js";
import renderCurrentUserID from "./userActions/renderCurrentUserID.js";
import playersInRoom from "./userActions/playersInRoom.js";
import login from "./userActions/login.js";
import startGame from "./gameActions/startGame.js";
import newHand from "./gameActions/newHand.js";
import nextPlayerTurn from "./gameActions/nextPlayerTurn.js";
import playingFieldUpdate from "./gameActions/playingFieldUpdate.js";
import falseDiceInput from "./gameActions/falseDiceInput.js";
import bluffResult from "./gameActions/bluffResult.js";
import gameReset from './gameActions/gameReset.js'
import updateOpponentUsername from './userActions/updateOpponentUsername.js'
import userDisplayName from "./userActions/userDisplayName.js";

const socket = io();

socket.on("connect", () => {
  renderCurrentUserID(socket); // needs to be first
  playingFieldUpdate(socket);

  login(socket); // connect to the server with cookieID

  playersInRoom(socket);

  playerLeft(socket); // this happens when players leave
  newHand(socket); // this happens when a player gets a new hand
  nextPlayerTurn(socket); // this happens when the turn changes
  falseDiceInput(socket); // this happens when a user has submitted a false Call (Bet is too low (how many dice))
  bluffResult(socket);
  updateOpponentUsername(socket)
  userDisplayName(socket); // listen for user input and react
  startGame(socket);
 
  gameReset(socket)

  // 
});
