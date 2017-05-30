import React from 'react';
import GoogleLogin from 'react-google-login';

/**
 * gets user data from googlelogin and saves to localStorage
 * @method responseGoogle
 * @return {object} - Set profile to local storage
 */

export function responseGoogle(response) {
  const profile = response.getBasicProfile();
  const user = {};
  user.username = profile.getName();
  user.email = profile.getEmail();
  user.image = profile.getImageUrl();
  localStorage.setItem('user', JSON.stringify(user));
  location.reload();
}

const Id = process.env.clientId;

/**
 * gets user data from google profile
 * @method login
 * @return {object} - user data
 */

export const Login =
  (<GoogleLogin
    clientId={Id}
    onSuccess={responseGoogle}
    tag="span"
    disabled="false"
    className="navig"
  >
    <div className="google"><img src="images/google6.png" alt="googleSignIn" className="googleimg" />
      <span className="login">Login</span>
    </div>
  </GoogleLogin>);

/**
 * deletes user data from localStorage
 * @method logout
 */

export function logout(evt) {
  evt.preventDefault();
  localStorage.removeItem('user');
  location.reload();
}

