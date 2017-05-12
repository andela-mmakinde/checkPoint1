import React from 'react';
import Header from './components/Header.jsx';
import Articles from './components/Articles.jsx';
import Sources from './components/Sources.jsx';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Footer from './components/Footer.jsx';

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
