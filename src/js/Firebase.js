// var firebase = require("firebase/app");
// require("firebase/auth");
// require("firebase/database");
// require("firebase/storage");

// var provider = new firebase.auth.GoogleAuthProvider();

// var config = {
//   apiKey: "AIzaSyCucD8hMWdc4Pg32FQ2Wl9SYLVLncqOEcE",
//   authDomain: "checkpoint1-5ff14.firebaseapp.com",
//   databaseURL: "https://checkpoint1-5ff14.firebaseio.com",
//   projectId: "checkpoint1-5ff14",
//   storageBucket: "checkpoint1-5ff14.appspot.com",
//   messagingSenderId: "399850816357"
// };
// firebase.initializeApp(config);

// firebase.auth().signInWithPopup(provider).then(function(result) {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   console.log(user, token);
//   // ...
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });
