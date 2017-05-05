import React from 'react';
import Header from './components/Header';
import Articles from './components/Articles';
import Sources from './components/Sources';


export default class Package extends React.Component {
	
  render() {
    return (
      <div>
        <div> <Header /> </div>
        <div> <Sources /> </div>
        <div> <Articles /> </div>
      </div>
    );
  }
}
