import getSources from '../../src/js/actions/articleActions';
import Dispatcher from '../../src/js/dispatcher';

describe('Source actions', () => {
  it('should should have a function getArticles', () => {
    expect(getSources).to.exist;
  });
});
