import React from 'react';
import GoogleLogin from 'react-google-login';


/**
 * @method responseGoogle
 * gets user data from googlelogin and saves to localStorage
 *
 * @export
 * @param {any} response
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

// Google Login button to get user data from Google+
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
 * @method logout
 * deletes user data from localStorage
 *
 * @export
 * @param {any} evt
 */
export function logout(evt) {
  evt.preventDefault();
  localStorage.removeItem('user');
  location.reload();
}

