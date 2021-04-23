export default function (socket) {
  if (document.cookie) {
    socket.emit("login", document.cookie);
  } else {
    socket.emit("login", socket.id);
    document.cookie = socket.id.replace(/[^a-zA-Z0-9 ]/g, ""); // filter out special characters
  }
}
