import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

/**
 * This is the store for news articles, it is registered to the dispatcher,
 * and receives a payload from the dispatcher which it makes available to the components
 * Articles.jsx
 */

class ArticleStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
    this.handleActions = this.handleActions.bind(this);
  }

/**
 * This function returns the news articles.
 */

  getArticles() {
    return this.articles;
  }

/**
 * This function specifies which payload to receive
 * from the dispatcher.
 * @param {object} action
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
