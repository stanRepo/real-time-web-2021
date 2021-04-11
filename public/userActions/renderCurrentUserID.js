export default function (socket) {
  const currentUserIDElement = document.querySelector("#myID");
  if (document.cookie) {
    currentUserIDElement.innerText = document.cookie;
    console.log("rendered ID");
  } else {
    document.cookie = socket.id;
    currentUserIDElement.innerText = document.cookie;
    console.log("rendered ID");
  }
}
