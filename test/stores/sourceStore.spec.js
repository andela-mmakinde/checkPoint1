import React from 'react';
import { EventEmitter } from 'events';
import Store from '../../src/js/stores/sourceStore';
import dispatcher from '../../src/js/dispatcher';
import { apiSourceResponse } from '../test_helper';


describe('Source Store', () => {

  it('should exist', () => {
    expect(Store).to.exist;
  });

  it('should be an object', () => {
    expect(Store).to.be.an('object');
  });

  it('should have a handleActions function', () => {
    expect(Store.handleActions).to.be.a('function');
  });

  it('should receive list of news sources from dispatcher', () => {
    dispatcher.dispatch({
      type: 'FETCH_SOURCES',
      sources: apiSourceResponse.sources,
    });
    expect(Store.getSources()).to.eql(apiSourceResponse.sources);
  });
});
