import React from 'react';
import GoogleLogin from 'react-google-login';

export const responseGoogle = (response) => {
  const profile = response.getBasicProfile();
  const user = {};
  user.username = profile.getName();
  user.email = profile.getEmail();
  user.image = profile.getImageUrl();
  localStorage.setItem('user', JSON.stringify(user));
  location.reload();
};

const Id = process.env.clientId;

export const login = () => {
  return (
    <GoogleLogin
      clientId={Id}
      onSuccess={responseGoogle}
      tag="span"
      disabled="false"
      className="navig"
    >
      <div className="google"><img src="images/google6.png" alt="googleSignIn" className="googleimg" />
        <span className="login">Login</span>
      </div>
    </GoogleLogin>
  );
};

export const logout = (evt) => {
  evt.preventDefault();
  localStorage.removeItem('user');
  location.reload();
};

export const out = (
  <a className="nav" href="" onClick={logout}>Logout</a>
);

