export default function (socket, startingPlayer) {
  console.log(`waiting for player to move, ID: ${startingPlayer}`);
  const myID = document.querySelector("#myID").innerText;
  const opponentsIDList = document.querySelectorAll(".opponent > p > span");
  const opponents = document.querySelectorAll(".opponent");
  const currentUser = document.querySelector(".currentUser");
  const callBtn = document.querySelector("#callBtn");
  const bluffBtn = document.querySelector("#bluffBtn");
  const diceHowMany = document.querySelector("#diceHowMany");
  const playerTurnInput = document.querySelector("#playerTurnInput");
  const itsNotYourTurnBanner = document.querySelector("#itsNotYourTurnBanner");
  const currentBet = document.querySelector('#currentBet > div')
  const myMoves = document.querySelector('#playerTurnInput > div:nth-child(1)')
 
  
  if (myID === startingPlayer) {
    myMoves.classList.remove('hidden')
    // This player has the turn
    currentUser.classList.add("itsMyTurnAnimation");
    currentUser.classList.add('currentUserGridMyTurn')
    currentUser.classList.remove('currentUserGridNotMyTurn')
    // remove input elements of currentUser because its not his turn
    playerTurnInput.classList.remove("hidden");
    
    if(currentBet.innerHTML !== ""){ // check if there is a bet to bluff ( so this is not the first turn)
      bluffBtn.classList.remove("hidden");
    }
    
    
    opponents.forEach((el) => {
      el.classList.remove("itsMyTurnAnimation");
    });
    
    callBtn.addEventListener("click", (e) => {
      const whichDice = document.querySelector("input[type=radio]:checked");
      console.log(whichDice)
      console.log("callbtn fired");
      socket.emit("confirmCall", {
        whichDice: whichDice.getAttribute('data-name'),
        diceHowMany: diceHowMany.value,
      });
      
    });

    bluffBtn.addEventListener("click", (e) => {
      console.log("bluffBtn fired");
      socket.emit("confirmBluff");
    });
  } else {
    // this player doesn't have the turn
    myMoves.classList.add('hidden')
    currentUser.classList.remove("itsMyTurnAnimation");
    currentUser.classList.remove('currentUserGridMyTurn')
    currentUser.classList.add('currentUserGridNotMyTurn')
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

  }
}
