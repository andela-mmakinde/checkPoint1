import React from 'react';
import { expect } from 'chai';
import * as Actions from '../../src/js/actions/naijActions';
import Dispatcher from '../../src/js/dispatcher';

const dispatcher = sinon.spy(Dispatcher, 'dispatch');


describe('Actions', () => {

  it('should should have a function fetchSources', () => {
    expect(Actions.fetchSources).to.exist;
  });

  it('should should have a function getArticles', () => {
    expect(Actions.getArticles).to.exist;
  });
});
