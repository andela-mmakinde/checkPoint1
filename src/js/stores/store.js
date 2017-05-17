import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

/**
 * This is the store for newsSources and articles, it is registered to the dispatcher,
 * and receives a payload from the dispatcher which it makes available to the components
 * Articles.jsx and , Sources.jsx
 */

class NaijStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
    this.articles = [];
    this.handleActions = this.handleActions.bind(this);
  }

/**
 * This function sets the news sources available.
 */

  setSources(availableSources) {
    this.sources = availableSources;
    return this.sources;
  }

/**
 * This function sets articles coming in from the store.
 */

  setArticles(availableArticles) {
    this.articles = availableArticles;
    return this.articles;
  }

/**
 * This function returns the news sources available.
 */

  getSources() {
    return this.sources;
  }

/**
 * This function returns the news articles.
 */

  getArticles() {
    return this.articles;
  }

/**
 * This function uses a switch statement to specify which payload to receive
 * from the dispatcher.
 * @param {object} action
 */

  handleActions(action) {
    switch (action.type) {
      case 'FETCH_SOURCES': {
        this.setSources(action.sources);
        this.emit('change');
        break;
      }
      case 'GET_ARTICLES': {
        if (action.err) {
          this.setArticles([]);
        } else {
          this.setArticles(action.articles);
        }
        this.emit('change');
        break;
      }
    }
  }
}

const naijStore = new NaijStore();

dispatcher.register(naijStore.handleActions.bind(naijStore));

export default naijStore;
