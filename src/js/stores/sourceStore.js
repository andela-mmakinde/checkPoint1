import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

/**
 * This is the store for newsSources, it is registered to the dispatcher,
 * and receives a payload from the dispatcher which it makes available to the component
 * Sources.jsx
 */

class SourceStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
    this.handleActions = this.handleActions.bind(this);
  }

/**
 * This function returns the news sources available.
 */
  getSources() {
    return this.sources;
  }

/**
 * This function specifies which payload to receive
 * from the dispatcher.
 * @param {object} action
 */

  handleActions(action) {
    if (action.type === 'FETCH_SOURCES') {
      this.sources = action.sources;
      this.emit('change');
    }
  }
}

const sourceStore = new SourceStore();

dispatcher.register(sourceStore.handleActions.bind(sourceStore));

export default sourceStore;
