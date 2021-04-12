export default function (socket) {
  socket.on("newHand", (hand) => {
    const myDice = document.querySelectorAll(".myDice");
    myDice.forEach((dice, i) => {
      dice.setAttribute("src", `./assets/dice/${hand[i]}.png`);
    });

    console.log("newHand = RENDERED");
    console.log(hand);
  });
}
