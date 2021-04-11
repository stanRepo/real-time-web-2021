const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 8080;
const db = require("./db.js");
app.use(express.static(path.resolve("public")));

let game = {
  playersInRoom: {},
};

io.on("connection", (socket) => {
  socket.on("login", (socketID) => {
    console.log(
      `User with this socket ID: ${socket.id} just connected. playerID: ${socketID}`
    );
    if (game.playersInRoom[socketID]) {
      console.log("existing player");
    } else {
      console.log("new player");
      game.playersInRoom[socketID] = {
        playerID: socketID,
        currentSocket: socket.id,
      };
    }
    socket.emit("playerJoined", socketID);
    // game.playersInRoom.Keys().forEach((player) => {
    //   if (player.playerID !== socketID) {
    //     io.clients[player.playerID].send("playerJoined", player.playerID);
    //   }
    // });

    io.emit("playersInRoom", game.playersInRoom);

    // listen for all the available moves
    socket.on("playerReady", (socketID) => {
      console.log(`player is ready. ID: ${socketID}`);

      game.playersInRoom[socketID].status = "ready";
    });
    socket.on("playerNotReady", (socketID) => {
      console.log(`player is not ready. ID: ${socketID}`);
      game.playersInRoom[socketID].status = "unready";
    });

    // on disconnect
    socket.on("disconnect", () => {
      console.log(`user disconnected ID: ${socketID}`);
      console.log(game.playersInRoom);

      console.log("UpdatedArray");

      io.emit("playerLeft", socketID);
    });
  });
});

http.listen(port, () => {
  console.log(`server is running live on ${port}`);
});

function deletePlayer(socket, playersInRoom) {
  const updated = playersInRoom.map((i) => {
    if (i === socket.id) {
      return ` Delete This Player${socket.id}`;
    } else {
    }
  });
  return updated;
}
