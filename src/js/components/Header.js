import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
     <header className="header">
        <h1>NewsApp!</h1>
          <h5 className='navig'>
            <a className='nav' href={'/'}>Sources</a> 
            <a className='nav' href={'/favorites'}>Favorites</a>
            <a className='nav' href=''>Login with Google+</a>
          </h5> 
      </header>
    );
  }
}


