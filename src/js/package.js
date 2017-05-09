import React from 'react';
import Firebase from './Firebase';
import Header from './components/Header';
import Articles from './components/Articles';
import Sources from './components/Sources';
import { Switch, Route, HashRouter } from 'react-router-dom';

export default class Package extends React.Component {

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Sources} />
          <Route path="/articles/:sourceId" component={Articles} />
          <Route
            render={
                function () {
                  return <h1>Page not found</h1>;
                }
              }
          />
        </Switch>
      </HashRouter >
    );
  }
}
