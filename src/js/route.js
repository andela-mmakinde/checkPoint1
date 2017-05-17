import React from 'react';
import Header from './components/Header';
import Articles from './components/Articles';
import Sources from './components/Sources';
import { Switch, Route, HashRouter } from 'react-router-dom';

const Package = () => (
  <div>
    <Header />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Sources} />
        <Route path="/articles/:sourceId" component={Articles} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </HashRouter >
  </div>
);


export default Package;