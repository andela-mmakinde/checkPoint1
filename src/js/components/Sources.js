import React from 'react';
import store from '../stores/store';
import * as Actions from '../actions/naijActions';

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
        <div key={source.id}>
          <div>{source.name}</div>
          <div> {source.description}</div>
          <div><a href={source.url} target="_blank">{source.url}</a></div>
          <button onClick={
            () => {
             Actions.getArticles(source.id);
            }
          }>show</button>
        </div>));
      return (<div>{sourceNodes}</div>);
    }
    return (<div> Loading... </div>);
  }
}
