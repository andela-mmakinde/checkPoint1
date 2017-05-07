import React from 'react';
import store from '../stores/store';
import * as Actions from '../actions/naijActions';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    height: 'auto',
  },
};


export default class Sources extends React.Component {
  constructor() {
    super();
      this.state = {
      sources: [],
    };
  }

  componentWillMount() {
      Actions.fetchSources();
      store.on('change', this.getSourceList.bind(this));
  }

  getSourceList() {
      this.setState({
        sources: store.getSources(),
      });
  }

  render() {
    if (this.state.sources) {
      const sourceNodes = this.state.sources.map(source => (
        <Card className="card" key={source.id}>
          <CardHeader
            title={source.name}
            subtitle={source.description}
          />
          <CardActions>
            <FlatButton onClick={
              () => {
                Actions.getArticles(source.id);
                }
              }label="Get Articles" />
          </CardActions>
        </Card>));

      return (<div>
                <MuiThemeProvider>
                  <div style={styles.root}>
                    <GridList 
                      cellHeight={180}
                      style={styles.gridList}
                    >
                      {sourceNodes}
                    </GridList>
                  </div>
                </MuiThemeProvider>
              </div>);
    }
    return (<div> Loading... </div>);
  }
}
