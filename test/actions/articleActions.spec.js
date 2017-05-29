import React from 'react';
import axios from 'axios';
import { expect } from 'chai';
import getArticles from '../../src/js/actions/articleActions';
import Dispatcher from '../../src/js/dispatcher';
import * as api from '../testHelper';

const dispatcher = sinon.spy(Dispatcher, 'dispatch');
const response = api.apiArticleResponse;
const headlineRes = api.headlineApi;


describe('getArticles action', () => {
  it('should be a function', () => {
    expect(getArticles).to.be.a('function');
  });
});


