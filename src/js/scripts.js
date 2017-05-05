require('./app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Package from './package';
import sources from './api';



const root = document.getElementById('root');

ReactDOM.render(<Package />, root);

