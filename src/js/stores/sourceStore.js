import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

/**
 * @class SourceStore
 * Holds the storage, listen to actions and update the stores
 *
 * @extends {EventEmitter}
 */
export class SourceStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
    this.handleActions = this.handleActions.bind(this);
  }

  /**
   * @method getSources
   * @returns {void}
   * @memberOf SourceStore
   */
  getSources() {
    return this.sources;
  }

  /**
   * @method handleActions
   * Receives actions and update the stores accordingly
   *
   * @param {any} action
   * @returns {void}
   * @memberOf SourceStore
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
