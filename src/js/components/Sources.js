import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import { GridList } from 'material-ui/GridList';
import injectTapEventPlugin from 'react-tap-event-plugin';
import store from '../stores/store';
import * as Actions from '../actions/naijActions';

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

    this.getSourceList = this.getSourceList.bind(this);
  }

  componentWillMount() {
    Actions.fetchSources();
    store.on('change', this.getSourceList);
  }

  componentWillUnmount() {
    store.removeListener('change', this.getSourceList);
  }

  getSourceList() {
    this.setState({
      sources: store.getSources(),
    });
  }

  filtherSources(evt) {
    const query = evt.target.value;
    const filteredSources = store.getSources().filter(
      source => source.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    this.setState({ sources: filteredSources });
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
            <div className="button">
              <a href={`#/articles/${source.id}`}>Get Articles</a>
            </div>
          </CardActions>
        </Card>));

      return (<div>
        <input className="searchbox" type="text" placeholder="Search Sources" onChange={this.filtherSources.bind(this)} />
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
