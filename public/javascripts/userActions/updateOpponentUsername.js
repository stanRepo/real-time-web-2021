export default function(socket){
    socket.on('updateOpponentUsername', (obj)=>{
        const opponentsIDs = document.querySelectorAll(".opponent > p > span");
        const opponentsElements = document.querySelectorAll('.opponent')
        localStorage.setItem(obj.opponentID , obj.opponentName)
        opponentsIDs.forEach(opponent=>{
            if(opponent.innerHTML === obj.opponentID){
                opponent.parentElement.innerHTML = `<h2>${obj.opponentName}</h2>`
            }
            
        })   
    })
}