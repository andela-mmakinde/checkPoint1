import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

/**
 * Holds the storage, listen to actions and update the stores
 * @class SourceStore
 */

class SourceStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
    this.handleActions = this.handleActions.bind(this);
  }

  /**
   * @method getSources
   * @return sources - The news sources stored in the constructor
   */

  getSources() {
    return this.sources;
  }

  /**
   * Receives actions and update the stores accordingly
   * @method handleActions
   * @param {object} - Action type and data
   */

  handleActions(action) {
    if (action.type === 'FETCH_SOURCES') {
      this.sources = action.sources;
      this.emit('change');
    }
    if (action.type === 'ERROR') {
      this.sources = [];
      this.emit('change');
    }
  }
}

const sourceStore = new SourceStore();

dispatcher.register(sourceStore.handleActions.bind(sourceStore));

export default sourceStore;
