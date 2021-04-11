export default function (socket) {
  if (document.cookie) {
    socket.emit("login", document.cookie);
  } else {
    socket.emit("login", socket.id);
  }
}
