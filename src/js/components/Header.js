import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>NewsApp!</h1>
        <ul className="ul">
          <li> Home </li>
          <li> Articles </li>
          <li> Favorites </li>
        </ul>
        LOGIN WITH GOOGLE
      </header>
    );
  }
}

