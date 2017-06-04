import { expect } from 'chai';
import sourceStore, { SourceStore } from '../../src/js/stores/sourceStore';
import dispatcher from '../../src/js/dispatcher';
import { apiSourceResponse } from '../testHelper';

describe('Source Store', () => {
  it('should exist', () => {
    expect(sourceStore).to.exist;
  });

  it('should be an object', () => {
    expect(sourceStore).to.be.an('object');
  });

  it('should have a handleActions function', () => {
    expect(sourceStore.handleActions).to.be.a('function');
  });

  it('should return an empty array if no action is dispatched', () => {
    const newSourceStore = new SourceStore();
    dispatcher.register(sourceStore.handleActions.bind(newSourceStore));
    expect(newSourceStore.getSources()).to.eql([]);
  });

  it('should receive list of news sources from dispatcher', () => {
    dispatcher.dispatch({
      type: 'FETCH_SOURCES',
      sources: apiSourceResponse.sources,
    });
    expect(sourceStore.getSources()).to.eql(apiSourceResponse.sources);
  });
});
