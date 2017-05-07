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

  filtherSources(evt) {
    let query = evt.target.value;
    if (query.trim().length >= 3) {
      let filteredSources = this.state.sources.filter((source) => {
        return source.name.toLowerCase().indexOf(query.toLowerCase()) > -1
      })

      this.setState({sources: filteredSources})
    }
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
            <div className='button'>
              <a href={`#/articles/${source.id}`}>Get Articles</a>
            </div>
          </CardActions>
        </Card>));

      return (<div>
              <input className='searchbox' type='text' placeholder='Search Sources' onChange={this.filtherSources.bind(this)}></input>
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
