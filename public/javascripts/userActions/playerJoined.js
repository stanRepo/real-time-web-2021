import userInput from "./input.js";
export default function (player, socket) {
  const opponentsElement = document.querySelector("#opponents");
  const thisPlayer = document.getElementById("myID").innerText;
  const opponent = document.getElementById(`playerID${player}`);
  const readyButton = document.querySelector("#readyButtonHeader");

  if (thisPlayer !== player && opponent === null) {
    //  check if opponent already exists in DOM.
    //  console.log(player);
    opponentsElement.insertAdjacentHTML(
      "beforeend",
      `   
          <section id="playerID${player}"class="opponent">
          <p>Player ID: <span>${player}</span></p>
          <img src="./assets/userIcon1.png" alt="" srcset="" />

          <div id="opponentDiceGroup">
          <div class="opponentDice">?</div>
          <div class="opponentDice">?</div>
          <div class="opponentDice">?</div>
          <div class="opponentDice">?</div>
          <div class="opponentDice">?</div>
          <div class="opponentDice">?</div>

          <div>
          </section>
          `
    );

    readyButton.innerHTML = `<label for="readyUpBtn">
    <h3 id="readyText">Click to start the game</h3></label>
<input name="readyUpBtn" type="button" value="START" id="readyUpBtn" />`;
    userInput(socket); // listen for user input
  }
}
