import playerJoined from "./playerJoined.js";

export default async function playersInRoom(socket) {
  socket.on("playersInRoom", (players) => {
    updateDOM(players);
  });
}

function updateDOM(players) {
  console.log(players);
  for (const key in players) {
    playerJoined(key);
  }
}
