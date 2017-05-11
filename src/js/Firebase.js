/*// let firebase = require('firebase/app');
// require('firebase/auth');
// require('firebase/database');
// require('firebase/storage');

// let config = {
//   apiKey: 'AIzaSyCucD8hMWdc4Pg32FQ2Wl9SYLVLncqOEcE',
//   authDomain: 'checkpoint1-5ff14.firebaseapp.com',
//   databaseURL: 'https://checkpoint1-5ff14.firebaseio.com',
//   projectId: 'checkpoint1-5ff14',
//   storageBucket: 'checkpoint1-5ff14.appspot.com',
//   messagingSenderId: '399850816357',
// };
// firebase.initializeApp(config);

// let provider = new firebase.auth.GoogleAuthProvider();

// export function signIn() {
//   firebase.auth().signInWithPopup(provider)
//     .then((result) => {
//       console.log(result)
//     }).catch((error) => {});
// }

// export function signOut() {
//   firebase.auth().signOut().then(() => {
//     alert('signed out');
//   }).catch((error) => {});
// }




import React from 'react';
import * as auth from './../Firebase';
let firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
require('firebase/storage');

let config = {
  apiKey: 'AIzaSyCucD8hMWdc4Pg32FQ2Wl9SYLVLncqOEcE',
  authDomain: 'checkpoint1-5ff14.firebaseapp.com',
  databaseURL: 'https://checkpoint1-5ff14.firebaseio.com',
  projectId: 'checkpoint1-5ff14',
  storageBucket: 'checkpoint1-5ff14.appspot.com',
  messagingSenderId: '399850816357',
};

let provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(config);
export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  authenticate() {
    firebase.auth().signInWithPopup(provider)
      .then(this.authHandler)
      .catch(err =>console.error(err));
  }

  authHandler(authData) {
    console.log(authData)
    // let currentUser;
    // currentUser.set({
    //   user: authData.user.uid     
    // })

  }

  render() {
    return (
      <header className="header">
        <h1>NewsApp!</h1>
        <h5 className="navig">
          <a className="nav" href={'/'}>Sources</a>
          <a className="nav" href={'/favorites'}>Favorites</a>
          <button onClick={this.authenticate.bind(this, new firebase.auth.GoogleAuthProvider())}>
            Login</button>
          <a className="nav" href="">Logout</a>
        </h5>
      </header>
    );
  }
}
*/
