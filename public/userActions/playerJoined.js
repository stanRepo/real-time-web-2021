export default function (player) {
  const opponentsElement = document.querySelector("#opponents");
  const thisPlayer = document.getElementById("myID").innerText;
  const opponent = document.getElementById(`playerID${player}`);

  if (thisPlayer !== player && opponent === null) {
    //  check if opponent already exists in DOM
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
  }
}
