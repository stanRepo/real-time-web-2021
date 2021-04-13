export default function (socket) {
  socket.on("playingFieldUpdate", (obj) => {
    console.log(obj);
  });
}
