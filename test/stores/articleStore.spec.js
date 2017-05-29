import articleStore from '../../src/js/stores/articleStore';
import dispatcher from '../../src/js/dispatcher';
import { apiArticleResponse } from '../testHelper';

describe('Articles Store', () => {
  it('should have a handleActions function', () => {
    expect(articleStore.handleActions).to.be.a('function');
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
