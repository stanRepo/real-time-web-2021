export default function (socket, startingPlayer) {
  console.log(`waiting for player to move, ID: ${startingPlayer}`);
  const myID = document.querySelector("#myID").innerText;
  const opponentsIDList = document.querySelectorAll(".opponent > p > span");
  const opponents = document.querySelectorAll(".opponent");
  const currentUser = document.querySelector(".currentUser");
  const callBtn = document.querySelector("#callBtn");
  const bluffBtn = document.querySelector("#bluffBtn");
  const whichDice = document.querySelector("#whichDice");
  const diceHowMany = document.querySelector("#diceHowMany");
  const playerTurnInput = document.querySelector("#playerTurnInput");
  const itsNotYourTurnBanner = document.querySelector("#itsNotYourTurnBanner");

  console.log(`my ID = ${myID}`);
  console.log(`StartingPlayer ID = `);
  console.log(startingPlayer)

  if (myID === startingPlayer) {
    // This player has the turn
    currentUser.classList.add("itsMyTurnAnimation");
    // remove input elements of currentUser because its not his turn
    playerTurnInput.classList.remove("hidden");
    bluffBtn.classList.remove("hidden");
    // add banner
    itsNotYourTurnBanner.classList.remove("hidden");

    opponents.forEach((el) => {
      el.classList.remove("itsMyTurnAnimation");
    });

    callBtn.addEventListener("click", (e) => {
      if (diceHowMany.validity.valid === true) {
        console.log("callbtn fired");
        socket.emit("confirmCall", {
          whichDice: whichDice.value,
          diceHowMany: diceHowMany.value,
        });
      }
    });

    bluffBtn.addEventListener("click", (e) => {
      console.log("bluffBtn fired");
      socket.emit("confirmBluff");
    });
  } else {
    // this player doesn't have the turn
    currentUser.classList.remove("itsMyTurnAnimation");
    opponentsIDList.forEach((el) => {
      if (el.innerText === startingPlayer) {
        // find opponent whos turn it is

        el.parentElement.parentElement.classList.add("itsMyTurnAnimation"); // set animation
      } else {
        el.parentElement.parentElement.classList.remove("itsMyTurnAnimation"); /// delete animation on opponents who dont have the turn
      }
    });

    // remove input elements of currentUser because its not his turn
    playerTurnInput.classList.add("hidden");
    bluffBtn.classList.add("hidden");
    // remove banner
    itsNotYourTurnBanner.classList.add("hidden");
  }
}
