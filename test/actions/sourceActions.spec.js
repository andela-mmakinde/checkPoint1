import getSources from '../../src/js/actions/articleActions';
import { apiSourceResponse } from '../testHelper';
import Dispatcher from '../../src/js/dispatcher';

describe('Source actions', () => {
  it('should have a function getArticles', () => {
    expect(getSources).to.exist;
  });

  it('should create an action get sources', () => {
    const sourceAction = {
      type: 'FETCH_SOURCES',
      sources: apiSourceResponse.sources,
    };
    console.log('===================================>', getSources);
    console.log('===================================>', sourceAction);

    expect(getSources()).toEqual(sourceAction);
  });
});
