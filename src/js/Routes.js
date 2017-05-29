import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header.jsx';
import Articles from './components/Articles.jsx';
import Sources from './components/Sources.jsx';


const Routes = () => (
  <div>
    <Header />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Sources} />
        <Route path="/articles/:sourceId/:sorts" component={Articles} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </HashRouter >
  </div>
);


export default Routes;
