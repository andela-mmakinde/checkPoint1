import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridList } from 'material-ui/GridList';
import sourceStore from '../stores/sourceStore';
import getSources from '../actions/sourceActions';
import Card from './SourceCard.jsx';

const styles = {
  gridList: {
    height: 'auto',
  },
};

/**
 * Create a react component
 * @class Sources
 */

export default class Sources extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: [],
    };
    this.getSourceList = this.getSourceList.bind(this);
    this.filterSources = this.filterSources.bind(this);
  }

  /**
   * Add an event Listener to the Sources Store and fires when the component is fully mounted
   * @method componentDidMount
   * @returns {event} - register event
   */

  componentDidMount() {
    getSources();
    sourceStore.on('change', this.getSourceList);
  }

  /**
   * Remove event listener from the Sources store
   * @method componentWilUnMount
   * @return {event} - removes event
   */

  componentWillUnmount() {
    sourceStore.removeListener('change', this.getSourceList);
  }

  /**
   * gets the list of news sources and set the state
   * @method getSourceList
   * @return {state} - Set sources to the state
   */

  getSourceList() {
    this.setState({
      sources: sourceStore.getSources(),
    });
  }

  /**
   * filterSources - Searches through available sources
   * @param {evt}
   * Sets the state of sources to the result
   */

  filterSources(evt) {
    const query = evt.target.value;
    const filteredSources = sourceStore.getSources().filter(
      source => source.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    this.setState({ sources: filteredSources });
  }

  /**
   * Render react component
   * @method render
   * @return {function} react-component
   */

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
