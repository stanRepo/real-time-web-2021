export default function (socket) {
  const myID = document.querySelector("#myID").innerText;
  const currentUser = document.querySelector(".currentUser");
  const winnerBanner = document.querySelector("#winnerBanner");

  socket.on("bluffResult", (obj) => {
    if (winnerBanner) {
      winnerBanner.parentElement.removeChild(winnerBanner);
    }
    if (obj.player === myID) {
      // add Winner Banner
      currentUser.parentElement.insertAdjacentHTML(
        "beforeend",
        `
        <div id="winnerBanner"><h3>Congratulations you have outplayed ID: ${obj.player}</h3><button>X</button</div>
`
      );
      const btn = document.querySelector("#winnerBanner > button");
      btn.addEventListener("click", () => {
        btn.classList.add("hidden");
      });
    } else {
      console.log(`You lost from player: ${obj.player}`);
      document.body.insertAdjacentHTML(
        "beforebegin",
        `<h1>YOU LOST THE BLUFF</h1>`
      );
    }
  });
}
