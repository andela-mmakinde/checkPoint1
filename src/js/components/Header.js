import React from 'react';
import GoogleLogin from 'react-google-login';

/**
 * Create a react component
 * @class Header
 */
export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.responseGoogle = this.responseGoogle.bind(this);
    this.login = this.login.bind(this);
    this.logout= this.logout.bind(this);
  }

  /**
   * gets user data from googlelogin and saves to localStorage
   * @method responseGoogle
   * @return {object} - Set profile to local storage
   */

  responseGoogle(response) {
    const profile = response.getBasicProfile();
    const user = {};
    user.username = profile.getName();
    user.email = profile.getEmail();
    user.image = profile.getImageUrl();
    localStorage.setItem('user', JSON.stringify(user));
    location.reload();
  }

  /**
   * gets user data from google profile
   * @method login
   * @return {object} - user data
   */

  login() {
    const Id = process.env.clientId;
    return (
      <GoogleLogin
        clientId={Id}
        onSuccess={this.responseGoogle}
        tag="span"
        disabled="false"
        className="navig"
      >
        <div className="google"><img src="images/google6.png" alt="googleSignIn" className="googleimg" />
          <span className="login">Login</span>
        </div>
      </GoogleLogin>
    );
  }

  /**
   * deletes user data from localStorage
   * @method logout
   */

  logout(evt) {
    evt.preventDefault();
    localStorage.removeItem('user');
    location.reload();
  }

 /**
   * Render react component
   * @method render
   * @return {function} react-component
   */

  render() {
    const out = (
      <a className="nav" href="" onClick={this.logout}>Logout</a>
    );
    const show = localStorage.user ? out : this.login();
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

