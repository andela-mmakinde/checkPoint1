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
 * @class Sources
 * Create a react component
 *
 * @export
 * @extends {React.Component}
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
   * @method componentDidMount
   * Add an event Listener to the Sources Store and fires when the component is fully mounted
   *
   * @returns {void}
   * @memberOf Sources
   */
  componentDidMount() {
    getSources();
    sourceStore.on('change', this.getSourceList);
  }

  /**
   * @method componentWilUnMount
   * Remove event listener
   *
   * @return {void} - removes event
   * @memberOf Sources
   */
  componentWillUnmount() {
    sourceStore.removeListener('change', this.getSourceList);
  }

  /**
   * @method getSourceList
   * gets the list of news sources and set the state
   *
   * @return {void}
   * @memberOf Sources
   */
  getSourceList() {
    this.setState({
      sources: sourceStore.getSources(),
    });
  }

  /**
   * @method filterSources
   * Searches through available sources
   *
   * @param {any} evt
   * @memberOf Sources
   */
  filterSources(evt) {
    const query = evt.target.value;
    const filteredSources = sourceStore
      .getSources()
      .filter(
        source => source.name.toLowerCase().indexOf(query.toLowerCase()) !== -1,
      );
    this.setState({ sources: filteredSources });
  }

  /**
   * @method render
   * Render react component
   *
   * @returns {void}
   * @memberOf Sources
   */
  render() {
    const sourceNodes = this.state.sources.map(source => (
      <Card source={source} key={source.id} />
    ));

    return (
      <div>
        <input
          className="searchbox"
          type="text"
          placeholder="Search Sources"
          onChange={this.filterSources}
        />
        <MuiThemeProvider>
          <div>
            <GridList cellHeight={220} style={styles.gridList}>
              {sourceNodes}
            </GridList>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
