import React from 'react';
import { expect } from 'chai';
import { EventEmitter } from 'events';
import Store from '../../src/js/stores/sourceStore';
import dispatcher from '../../src/js/dispatcher';


describe('Source Store', () => {
  const apiReponse = {
    status: 'ok',
    sources: [
      {
        id: 'abc-news-au',
        name: 'ABC News (AU)',
        description: "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
        url: 'http://www.abc.net.au/news',
        category: 'general',
        language: 'en',
        country: 'au',
        urlsToLogos: {
          small: '',
          medium: '',
          large: '',
        },
        sortBysAvailable: [
          'top',
        ],
      },
    ],
  };
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
      sources: apiReponse.sources,
    });
    expect(Store.getSources()).to.eql(apiReponse.sources);
  });
});
