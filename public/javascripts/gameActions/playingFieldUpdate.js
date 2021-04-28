export default function (socket) {
  socket.on("playingFieldUpdate", (obj) => {
    console.log(obj);
    if (obj.status === "changeCurrentBet") {
      const el = document.querySelector("#currentBet > div");
      const text = document.querySelector("#currentBet > span");

      el.innerHTML = `<h3>Current Bet</h3> <p>By player: ${obj.playerWhoMadeThisBet}</p> <br> `;

      for (let i = 0; i < parseInt(obj.currentBet.diceHowMany); i++) {
        el.insertAdjacentHTML(
          "beforeend",
          `
          <img src="./assets/dice/${obj.currentBet.whichDice}.png" alt="" class="dice" />
      
        `
        );
      }
      el.insertAdjacentHTML('beforeend', `<p>Dice in game: ${obj.numberOfDice}</p>`)
    }

    setNextCallRequirement(obj.currentBet.diceHowMany);
    
  });
}

function setNextCallRequirement(minimumDice) {
  const userInput = document.querySelector("#diceHowMany");
  userInput.setAttribute("min", parseInt(minimumDice));
}

function showBluffBtn(){
  const bluffBtn = document.querySelector('#bluffBtn')
  bluffBtn.classList.remove('hidden')
}
