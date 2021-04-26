exports.reset = function(socket, game, io){
    console.log('Game Resetting')
    game.status = "Game ended. Restart game"
    game.currentBet = undefined;
    socket.emit('gameReset')
}