export default function (socket) {
  socket.on("newHand", (hand) => {
    const myDice = document.querySelector("#myDice");

    

myDice.innerHTML = ``
hand = hand.sort()

hand.forEach((dice, i)=>{
    const rowExists = document.querySelector(`#myDiceRow${dice}`)
if(rowExists){

  const el =`
  <img class="myDice smallDice" src="./assets/dice/${dice}.png" alt="" />
  `
  rowExists.insertAdjacentHTML('beforeend', el)
}else{
  const el = `   
  
  <div id="myDiceRow${dice}">
  <img class="myDice dice" src="./assets/dice/${dice}.png" alt="" />
  

  </div>`
  myDice.insertAdjacentHTML('beforeend', el)

}
  
})


// hand.forEach((dice, i)=>{

//   if(diceExists){
// const rowWithDice = myDice.querySelector(`div`)
// const el = `<img class="myDice dice" src="./assets/dice/${dice}.png" alt="" />`

// rowWithDice.insertAdjacentHTML('beforeend' ,el)
// } else{
//   const el = `<div><img class="myDice dice" src="./assets/dice/${dice}.png" alt="" /></div>`
//   myDice.insertAdjacentHTML('beforeend', el)
//   }

// })


    // myDice.forEach((dice, i) => {
    //   dice.setAttribute("src", `./assets/dice/${hand[i]}.png`);
    // });

    console.log("newHand = RENDERED");
    // console.log(hand);
  });
}
