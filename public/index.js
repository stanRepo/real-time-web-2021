import userInput from "./userActions/input.js";

import playerLeft from "./userActions/playerLeft.js";
import renderCurrentUserID from "./userActions/renderCurrentUserID.js";
import playersInRoom from "./userActions/playersInRoom.js";
import login from "./userActions/login.js";
import startGame from "./gameActions/startGame.js";
import newHand from "./gameActions/newHand.js";

const socket = io();

socket.on("connect", () => {
  renderCurrentUserID(socket); // needs to be first
  console.dir(`This socketID = ${document.cookie}`);

  login(socket);

  playersInRoom(socket);
  userInput(socket);

  playerLeft(socket);
  newHand(socket);

  socket.on("startGame", (state) => {
    startGame(socket);
  });
});
