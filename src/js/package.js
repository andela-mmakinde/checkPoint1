import React from 'react';
import Header from './components/Header';
import Articles from './components/Articles';
import Sources from './components/Sources';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Switch, Route, HashRouter}from 'react-router-dom';


const MuiSources = () => (
    <MuiThemeProvider>
      <Sources />
    </MuiThemeProvider>
);

const MuiArticles = () => (
    <MuiThemeProvider>
      <Articles />
    </MuiThemeProvider>
);

export default class Package extends React.Component {
  
  render() {
    return (
        <HashRouter>
          <Switch>
              <Route exact path="/" component={MuiSources} />
              <Route path="/articles" component={MuiArticles} />
              <Route render = {
                function(){
                  return <h1>Page not found</h1>
                }
              } />
          </Switch>
        </HashRouter >
    );
  }
}
