import React from 'react';
import { expect } from 'chai';
import * as Actions from '../../src/js/actions/naijActions';
import * as apiCalls from '../../src/js/api';
import * as Dispatcher from '../../src/js/dispatcher';


describe('Actions', () => {

  it('should should have a function fetchSources', () => {
    expect(Actions.fetchSources).to.exist;
  });

  it('should should have a function getArticles', () => {
    expect(Actions.getArticles).to.exist;
  });
});
