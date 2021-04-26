// export default class Game {
//   constructor() {
//     this.playersInRoom = function game() {
//       (this.status = "hasNotStarted"),
//         (this.playersWhoHadTheirTurn = []),
//         (this.playersAvailable = []);
//     };
//   }
// }

// let game = {
//   playersInRoom: {},
//   status: "hasNotStarted",
//   playersWhoHadTheirTurn: [],
//   playersAvailable: [],
// };
// let readyPlayers = [];

// io.on("connection", (socket) => {
//   socket.on("login", (socketID) => {
//     console.log(
//       `User with this socket ID: ${socket.id} just connected. playerID: ${socketID}`
//     );

//     io.emit("playersInRoom", game.playersInRoom);
//     //console.log(socketIO);
//     socketIO.socketMain(socket, socketID, game, readyPlayers, io);
//   });
// });
