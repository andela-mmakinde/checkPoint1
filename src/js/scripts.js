require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Package from './package';
import sources from './api';
import Header from './components/Header';
import Footer from './components/Footer';


const root = document.getElementById('root');
const header = document.getElementById('header');
const footer = document.getElementById('footer');


ReactDOM.render(<Header />, header);
ReactDOM.render(<Package />, root);
ReactDOM.render(<Footer />, footer);

