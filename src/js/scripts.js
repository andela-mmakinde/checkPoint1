import React from 'react';
import ReactDOM from 'react-dom';
import Package from './package';
import Header from './components/Header';
import Footer from './components/Footer';

require('./app.scss');


const root = document.getElementById('root');
const header = document.getElementById('header');
const footer = document.getElementById('footer');


ReactDOM.render(<Header />, header);
ReactDOM.render(<Package />, root);
ReactDOM.render(<Footer />, footer);

