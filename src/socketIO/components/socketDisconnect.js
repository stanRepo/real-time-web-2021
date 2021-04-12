// on disconnect
exports.disconnect = function (socket, socketID, readyPlayers, io, game) {
  socket.on("disconnect", () => {
    console.log(`user disconnected ID: ${socketID}`);
    io.emit("playerLeft", socketID);
    readyPlayers.pop();
  });
};
