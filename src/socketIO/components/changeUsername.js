exports.change = function(socket, socketID, game, io){
    socket.on('changeUsername', (name)=>{
     
        game.playersInRoom[socketID].playerDisplayName = name
        const obj = {
            opponentID: socketID,
            opponentName: name
        }
        io.emit('updateOpponentUsername', obj)
    })
}