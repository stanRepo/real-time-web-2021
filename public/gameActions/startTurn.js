export default function (socket, startingPlayer) {
  console.log(`waiting for player to move, ID: ${startingPlayer}`);
  const myID = document.querySelector("#myID").innerText;
  const opponentsIDList = document.querySelectorAll(".opponent > p > span");
  const opponents = document.querySelectorAll(".opponent");
  const currentUser = document.querySelector(".currentUser");
  if (myID === startingPlayer) {
    // This player has the turn
    currentUser.classList.add("itsMyTurnAnimation");
    opponents.forEach((el) => {
      el.classList.remove("itsMyTurnAnimation");
    });

    const callBtn = document.querySelector("#callBtn");
    const whichDice = document.querySelector("#whichDice");
    const diceHowMany = document.querySelector("#diceHowMany");

    callBtn.addEventListener("click", (e) => {
      console.log("callbtn fired");
      socket.emit("confirmCall", {
        whichDice: whichDice.value,
        diceHowMany: diceHowMany.value,
      });
    });
  } else {
    // this player doesn't have the turn
    currentUser.classList.remove("itsMyTurnAnimation");
    opponentsIDList.forEach((el) => {
      console.log(el.innerText);
      if (el.innerText === startingPlayer) {
        // find opponent whos turn it is
        console.log(el.innerText);
        console.log(el.parentElement.parentElement);
        el.parentElement.parentElement.classList.add("itsMyTurnAnimation"); // set animation
      } else {
        el.parentElement.parentElement.classList.remove("itsMyTurnAnimation"); /// delete animation on opponents who dont have the turn
      }
    });
  }
}
