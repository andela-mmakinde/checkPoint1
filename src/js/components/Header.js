import React from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response.profileObj);
};

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>NewsApp!</h1>
        <h5 className="navig">
          <a className="nav" href={'/'}>Sources</a>
          <a className="nav" href={'/favorites'}>Favorites</a>
          <a className="nav" href=""><GoogleLogin
            className="google"
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          /></a>
        </h5>
      </header>
    );
  }
}

