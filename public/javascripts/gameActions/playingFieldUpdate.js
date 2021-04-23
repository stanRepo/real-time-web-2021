export default function (socket) {
  socket.on("playingFieldUpdate", (obj) => {
    console.log(obj);
    if (obj.status === "changeCurrentBet") {
      const el = document.querySelector("#currentBet > div");
      const text = document.querySelector("#currentBet > span");

      el.innerHTML = "<h3>Current Bet</h3>";

      for (let i = 0; i < parseInt(obj.currentBet.diceHowMany); i++) {
        el.insertAdjacentHTML(
          "beforeend",
          `
          <img src="./assets/dice/${obj.currentBet.whichDice}.png" alt="" class="dice" />
      
        `
        );
      }
    }

    setNextCallRequirement(obj.currentBet.diceHowMany);
  });
}

function setNextCallRequirement(minimumDice) {
  const userInput = document.querySelector("#diceHowMany");
  userInput.setAttribute("min", parseInt(minimumDice));
}
