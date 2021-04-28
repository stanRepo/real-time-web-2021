exports.reset = function(socket, game, io){
    console.log('Game Resetting')
    console.log(game)
    game.status = "Game ended. Restart game"
    game.currentBet = undefined;
    socket.emit('gameReset')
}