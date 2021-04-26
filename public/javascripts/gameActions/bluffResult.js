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
  const banner = document.querySelectorAll('.endGameBanner')
  const opponents = document.querySelector('opponents')

  socket.on("bluffResult", (obj) => {
    


    console.log(obj)
    // I have won
    if (obj.playerWhoWon === myID) {
      // add Winner Banner
     banner[0].classList.remove("hidden")
    } else if (obj.playerWhoLost === myID) {
      // I have lost
      banner[1].classList.remove('hidden')
   
    } else if (obj.playerWhoLost !== myID && obj.playerWhoWon!== myID) {
      // Someone Else Lost
banner[2].classList.remove('hidden')
      
    
    } 
  });
}
