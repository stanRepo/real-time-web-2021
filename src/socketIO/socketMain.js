const playerReadyStatus = require("./components/playerReadyStatus.js");
const checkPlayerNEW_EXIST = require("./components/checkPlayerNEW_EXIST.js");
const socketDisconnect = require("./components/socketDisconnect.js");
exports.socketMain = function (socket, socketID, game, readyPlayers, io) {
  // console.log(playerReadyStatus);
  playerReadyStatus.playerReadyStatus(socket, socketID, game, readyPlayers, io);
  checkPlayerNEW_EXIST.checkPlayerNEW_EXIST(socket, socketID, game);
  socketDisconnect.disconnect(socket, socketID, readyPlayers, io, game);
};
