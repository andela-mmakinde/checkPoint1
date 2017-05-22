import React from 'react';
import { expect } from 'chai';
import getArticles from '../../src/js/actions/articleActions';
import Dispatcher from '../../src/js/dispatcher';

describe('Article actions', () => {
  it('should have a function getArticles', () => {
    expect(getArticles).to.exist;
  });
  // tryna make actions call api and probably return data
  // it('should call the newsapi to get news articles', () => {
  //   expect(getArticles()).to.eql();
  // });
});
