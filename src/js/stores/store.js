import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';


class NaijStore extends EventEmitter {
  constructor() {
    super();
    this.sources = [];
    this.articles = [];
    this.handleActions = this.handleActions.bind(this);
  }

  setSources(data) {
    this.sources = data;
    return this.sources;
  }

  setArticles(data) {
    this.articles = data;
    return this.articles;
  }

  getSources() {
    return this.sources;
  }
  getArticles() {
    return this.articles;
  }

  handleActions(action) {
    switch (action.type) {
      case 'FETCH_SOURCES': {
        this.setSources(action.data);
        this.emit('change');
        break;
      }
      case 'GET_ARTICLES': {
        if (action.err) {
          this.setArticles([]);
        } else {
          this.setArticles(action.data);
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
