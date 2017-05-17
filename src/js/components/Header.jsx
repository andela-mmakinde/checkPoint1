import React from 'react';
import * as auth from '../auth';


export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // const obj = JSON.parse(localStorage.getItem('user'));
    // const displayPics = (<div><img src={obj.image} alt="" /></div>);
    const show = localStorage.user ? auth.out : auth.login;

    return (
      <header className="header">
        <h1><a className="head" href={'/'}>NewsApp!</a></h1>
        <h5 className="navig">
          <a className="nav" href={'/'}>Sources</a>
          {show}
        </h5>
      </header>
    );
  }
}

