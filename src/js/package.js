import React from 'react';
import Header from './components/Header';
import Articles from './components/Articles';
import Sources from './components/Sources';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Footer from './components/Footer';

export default class Package extends React.Component {

  render() {
    return (
      <div>
        <Header />
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
        <Footer />
      </div>
    );
  }
}
