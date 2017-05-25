import React from 'react';
import GoogleLogin from 'react-google-login';
import { login, logout,  } from './GoogleLogin';

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
    const show = localStorage.user ? out : login;
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

