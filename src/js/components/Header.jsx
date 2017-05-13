import React from 'react';
import GoogleLogin from 'react-google-login';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.responseGoogle = this.responseGoogle.bind(this);
    this.logout = this.logout.bind(this);
  }

  responseGoogle(response) {
    const profile = response.getBasicProfile();
    const user = {};
    user.username = profile.getName();
    user.email = profile.getEmail();
    user.image = profile.getImageUrl();
    localStorage.setItem('user', JSON.stringify(user));
    location.reload();
  }

  logout(e) {
    e.preventDefault();
    localStorage.removeItem('user');
    location.reload();
  }

  render() {
    const login = (
      <GoogleLogin
        clientId="736461806703-oi66schng2lrsuup0bu34e76ce4a0mb8.apps.googleusercontent.com"
        onSuccess={this.responseGoogle}
        onFailure={this.errorGoogle}
        tag="span"
        disabled="false"
        className="navig"
      >
        <span className="google"><img src="images/google6.png" alt="googleSignIn" className="googleimg" /><span className="login">Login</span></span>
      </GoogleLogin>
    );
    const logout = (
      <a className="nav" href="" onClick={this.logout}>Logout</a>
    );

    const show = localStorage.user ? logout : login;
    return (
      <header className="header">
        <h1><a href={'/'}>NewsApp!</a></h1>
        <h5 className="navig">
          <a className="nav" href={'/'}>Sources</a>
          <a className="nav" href={'/favorites'}>Favorites</a>
          {show}
        </h5>
      </header>
    );
  }
}

