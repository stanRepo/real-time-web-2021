export default function (socket) {
  socket.on("falseDiceInput", (currentBet) => {
    console.dir(`False Dice Input. Current bet is: ${currentBet} `);
  });
}
