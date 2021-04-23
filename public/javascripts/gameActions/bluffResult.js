// this function is called when the server emits "bluffResult"
// theres 4 possibilities on this outcome
// I have won
// I have lost
// Someone else won
// Someone else lost
//
// The object the client is recieving :
// {result: true/false, player: thisPlayerturn}

export default function (socket) {
  const myID = document.querySelector("#myID").innerText;

  socket.on("bluffResult", (obj) => {
    // I have won
    if (obj.player[0] === myID && obj.result === true) {
      // add Winner Banner
      alert(
        `<h3>Congratulations someone thought you were bluffing while you were not :D.</h3>`
      );
    } else if (obj.player[0] === myID && obj.result === false) {
      // I have lost
      alert(
        `<h3 id="bluffResult">You lost the bluff. You have lost the game</h3>`
      );
    } else if (obj.player[0] !== myID && obj.result === false) {
      // Someone Else Lost

      alert(
        `<h3 id="bluffResult">Someone else lost the bluff. You are still in the game</h3>`
      );
    } else if (obj.player[0] !== myID && obj.result === true) {
      // someone else won

      alert(`
      <h3>Someone else lost the bluff. You are still in the game</h3>
      `);
    }
  });
}
