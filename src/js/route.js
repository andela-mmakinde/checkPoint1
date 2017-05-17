import React from 'react';
import Header from './components/Header.jsx';
import Articles from './components/Articles.jsx';
import Sources from './components/Sources.jsx';
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
