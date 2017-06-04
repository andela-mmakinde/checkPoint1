import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

/**
 * @class ArticleStore
 * Holds the storage, listen to actions and update the stores
 *
 * @extends {EventEmitter}
 */
export class ArticleStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
    this.handleActions = this.handleActions.bind(this);
  }

  /**
   * @method getArticles
   * @returns {void}
   * @memberOf ArticleStore
   */
  getArticles() {
    return this.articles;
  }

  /**
   * @method handleActions
   * Receives actions and update the stores accordingly
   *
   * @param {any} action
   * @returns {void}
   * @memberOf ArticleStore
   */
  handleActions(action) {
    if (action.type === 'GET_ARTICLES') {
      this.articles = action.articles;
      this.emit('change');
    }
    if (action.type === 'ERROR') {
      this.articles = [];
      this.emit('change');
    }
  }
}

const articleStore = new ArticleStore();
dispatcher.register(articleStore.handleActions.bind(articleStore));

export default articleStore;
