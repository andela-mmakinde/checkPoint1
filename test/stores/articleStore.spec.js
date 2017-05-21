import Store from '../../src/js/stores/articleStore';
import dispatcher from '../../src/js/dispatcher';
import apiArticleResponse from '../test_helper';

describe('Articles Store', () => {
  it('should have a handleActions function', () => {
    expect(Store.handleActions).to.be.a('function');
  });

  it('should receive newsArticles from dispatcher', () => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      articles: apiArticleResponse,
    });
    expect(Store.getArticles()).to.eql(apiArticleResponse);
  });
});
