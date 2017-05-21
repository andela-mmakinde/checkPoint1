import React from 'react';
import { expect } from 'chai';
import getArticles from '../../src/js/actions/articleActions';
import Dispatcher from '../../src/js/dispatcher';

describe('Article actions', () => {
  it('should should have a function getArticles', () => {
    expect(getArticles).to.exist;
  });
});
