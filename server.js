const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 8080;
const homeRoute = require("./src/routes/homeRoute.js");
const gameRoute = require("./src/routes/gameRoute.js");

socketIO = require("./src/socketIO/socketMain.js");

app.use(express.static(path.resolve("public")));
// view engine setup
app.set("views", path.join(__dirname, "src/"));
app.set("view engine", "ejs");

app.get("/", homeRoute);
app.get("/game", gameRoute);

let game = {
  playersInRoom: {},
  status: "hasNotStarted",
  playersWhoHadTheirTurn: [],
  playersAvailable: [],
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

