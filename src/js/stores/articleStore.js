import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

/**
 * Holds the storage, listen to actions and update the stores
 * @class ArticleStore
 */

class ArticleStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
    this.handleActions = this.handleActions.bind(this);
  }

  /**
   * @method getArticles
   * @return articles - The articles stored in the constructor
   */

  getArticles() {
    return this.articles;
  }


  /**
   * Receives actions and update the stores accordingly
   * @method handleActions
   * @param {object} - Action type and data
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
