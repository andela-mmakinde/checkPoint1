import React from 'react';
import { Login, logout } from './GoogleLogin.jsx';

/**
 * Create a react component
 * @class Header
 */

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

/**
 * Render react component
 * @method render
 * @return {function} react-component
 */

  render() {
    const out = (
      <a className="nav" href="" onClick={logout}>Logout</a>
    );
    const show = localStorage.user ? out : Login;
    const link = <a className="nav" href={'/'}>Sources</a>;
    const showNothing = <div />;
    const sourceLink = localStorage.user ? link : showNothing;
    return (
      <header className="header">
        <h1><a className="head" href={'/'}>NewsApp!</a></h1>
        <h5 className="navig">
          {sourceLink}
          {show}
        </h5>
      </header>
    );
  }
}

