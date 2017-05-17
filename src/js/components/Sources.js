import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridList } from 'material-ui/GridList';
import injectTapEventPlugin from 'react-tap-event-plugin';
import sourceStore from '../stores/sourceStore';
import * as Actions from '../actions/naijActions';
import Card from './SourceCard';

injectTapEventPlugin();

const styles = {
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
    this.filterSources = this.filterSources.bind(this);
  }

  componentWillMount() {
    sourceStore.on('change', this.getSourceList);
  }

  componentDidMount() {
    Actions.fetchSources();
  }

  componentWillUnmount() {
    sourceStore.removeListener('change', this.getSourceList);
  }

  getSourceList() {
    this.setState({
      sources: sourceStore.getSources(),
    });
  }

  filterSources(evt) {
    const query = evt.target.value;
    const filteredSources = sourceStore.getSources().filter(
      source => source.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    this.setState({ sources: filteredSources });
  }

  render() {
    const sourceNodes = this.state.sources.map(source =>
      <Card source={source} key={source.id} />,
      );

    return (
      <div>
        <input className="searchbox" type="text" placeholder="Search Sources" onChange={this.filterSources} />
        <MuiThemeProvider>
          <div>
            <GridList
              cellHeight={220}
              style={styles.gridList}
            >
              { sourceNodes }
            </GridList>
          </div>
        </MuiThemeProvider>
      </div>);
  }
}
