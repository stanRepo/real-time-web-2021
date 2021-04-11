// docs google firebase
// https://firebase.google.com/docs/database/admin/save-data#node.js

const admin = require("firebase-admin");
const serviceAccount = require("./firebaseSecret.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mywebstore-37d09.firebaseio.com",
});
var db = admin.database();
var ref = db.ref("gameServer/");

exports.db = db;

//   // Get a database reference to our blog
//   var usersRef = ref.child(path);
//   usersRef.set(
//     {
//       alanisawesome: {
//         date_of_birth: "June 23, 1912",
//         full_name: "Alan Turing",
//       },
//       gracehop: {
//         date_of_birth: "December 9, 1906",
//         full_name: "Grace Hopper",
//       },
//     },
//     () => {
//       console.log("saved");
//     }
//   );
//
