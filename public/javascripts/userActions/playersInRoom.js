import playerJoined from "./playerJoined.js";

export default async function playersInRoom(socket) {
  socket.on("playersInRoom", (players) => {
    updateDOM(players, socket);
  });
}

function updateDOM(players, socket) {
  console.log(players);
  for (const key in players) {
    playerJoined(key, socket);
  }
}
