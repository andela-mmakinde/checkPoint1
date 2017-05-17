import React from 'react';
import { expect } from 'chai';
import apiResponseArticle from '../mockData';
import Store from '../../src/js/stores/articleStore';
import { EventEmitter } from 'events';
import dispatcher from '../../src/js/dispatcher';

describe('Articles Store', () => {
  it('should exist', () => {
    expect(Store).to.exist;
  });

  it('should be an object', () => {
    expect(Store).to.be.an('object');
  });

  it('should have a handleActions function', () => {
    expect(Store.handleActions).to.be.a('function');
  });

  it('should receive newsArticles from dispatcher', () => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      articles: apiResponseArticle,
    });
    expect(Store.getArticles()).to.eql(apiResponseArticle);
  });
});
