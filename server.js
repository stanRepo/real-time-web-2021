const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 8080;
const db = require("./db.js");

socketIO = require("./src/socketIO/socketMain.js");

app.use(express.static(path.resolve("public")));

let game = {
  playersInRoom: {},
};
let readyPlayers = [];

io.on("connection", (socket) => {
  socket.on("login", (socketID) => {
    console.log(
      `User with this socket ID: ${socket.id} just connected. playerID: ${socketID}`
    );

    io.emit("playersInRoom", game.playersInRoom);
    //console.log(socketIO);
    socketIO.socketMain(socket, socketID, game, readyPlayers, io);
  });
});

http.listen(port, () => {
  console.log(`server is running live on ${port}`);
});
