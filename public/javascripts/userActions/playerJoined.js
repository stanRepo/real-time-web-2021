import userInput from "./input.js";
export default function (player, socket, playerObj) {
  const opponentsElement = document.querySelector("#opponents");
  const thisPlayer = document.getElementById("myID").innerText;
  const readyButton = document.querySelector("#readyButtonHeader");
  const opponent = document.getElementById(`playerID${player}`);
  
  if (thisPlayer !== player && opponent === null) {
    //  check if opponent already exists in DOM.
    //  console.log(player);
    const storedPlayerName = localStorage.getItem(player)
    opponentsElement.insertAdjacentHTML(
      "beforeend",
      `   
      <section id="playerID${player}"class="opponent">
      <div class="opponentName"><h2>${storedPlayerName ? storedPlayerName: ""}</h2></div>
          <p class="opponentID">Player ID: <span>${player}</span></p>
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
