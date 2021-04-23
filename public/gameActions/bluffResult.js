export default function (socket) {
  const myID = document.querySelector("#myID").innerText;
  const currentUser = document.querySelector(".currentUser");
  const winnerBanner = document.querySelector("#winnerBanner");

  socket.on("bluffResult", (obj) => {
    if (winnerBanner) {
      winnerBanner.parentElement.removeChild(winnerBanner);
    }

    // theres 4 possibilities on this outcome
    // I have won
    // I have lost
    // Someone else won
    // Someone else lost

    // I have won
    if (obj.player === myID && obj.result === true) {
      // add Winner Banner
      currentUser.parentElement.insertAdjacentHTML(
        "beforeend",
        `
        <div id="winnerBanner"><h3>Congratulations you have outplayed ID: ${obj.player}</h3><button>X</button</div>
`
      );
      const btn = document.querySelector("#winnerBanner > button");
      btn.addEventListener("click", () => {
        btn.parentElement.classList.add("hidden");
      });
    } else if (obj.player === myID && obj.result === false) {
      // I have lost
      console.log(`You lost from player: ${obj.player}`);
      document.body.insertAdjacentHTML(
        "beforebegin",
        `<h3 id="bluffResult">You lost the bluff. You have lost the game</h3>`
      );
    } else if (obj.player !== myID && obj.result === false) {
      // Someone Else Lost
      document.body.insertAdjacentHTML(
        "beforebegin",
        `<h3 id="bluffResult">Someone else lost the bluff. You are still in the game</h3>`
      );
    } else if (obj.player !== myID && obj.result === true) {
      // someone else won
      document.body.insertAdjacentHTML(
        "beforebegin",
        `<div id="bluffResult"><h3>Someone else lost the bluff. You are still in the game</h3><button>X</button></div>`
      );
    }

    const bluffResultCloseBtn = document.querySelector("#bluffResult > button");
    if (bluffResultCloseBtn) {
      bluffResultCloseBtn.addEventListener("click", () => {
        bluffResultCloseBtn.parentElement.classList.add("hidden");
      });
    }
  });
}
