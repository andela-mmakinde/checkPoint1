import { expect } from 'chai';
import articleStore, { ArticleStore } from '../../src/js/stores/articleStore';
import dispatcher from '../../src/js/dispatcher';
import { apiArticleResponse } from '../testHelper';

describe('Articles Store', () => {
  it('should have a handleActions method', () => {
    expect(articleStore.handleActions).to.be.a('function');
  });

  it('should return an empty array if no action is dispatched', () => {
    const newArticleStore = new ArticleStore();
    dispatcher.register(newArticleStore.handleActions.bind(newArticleStore));
    expect(newArticleStore.getArticles()).to.eql([]);
  });

  it('should receive news Articles from dispatcher', () => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      articles: apiArticleResponse,
    });
    expect(articleStore.getArticles()).to.eql(apiArticleResponse);
  });

  it('should emit change on receiving news headlines from Dispatcher', () => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      articles: apiArticleResponse,
    });
    expect(articleStore.emit('change')).to.exist;
  });
});
