const playerReadyStatus = require("./components/playerReadyStatus.js");
const checkPlayerNEW_EXIST = require("./components/checkPlayerNEW_EXIST.js");
const socketDisconnect = require("./components/socketDisconnect.js");
const confirmCall = require("./components/confirmCall.js");
const confirmBluff = require("./components/confirmBluff.js");
const changeUsername = require('./components/changeUsername.js')

exports.socketMain = function (socket, socketID, game, readyPlayers, io) {
  // console.log(playerReadyStatus);
  changeUsername.change(socket, socketID, game, io)
  playerReadyStatus.playerReadyStatus(socket, socketID, game, readyPlayers, io);
  checkPlayerNEW_EXIST.checkPlayerNEW_EXIST(socket, socketID, game, io);

  socketDisconnect.disconnect(socket, socketID, readyPlayers, io, game);
  confirmCall.call(socket, socketID, game, io);
  confirmBluff.bluff(socket, socketID, game, io);

};
