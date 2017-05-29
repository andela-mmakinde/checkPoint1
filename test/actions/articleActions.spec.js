import axios from 'axios';
import sinon from 'sinon';
import { expect } from 'chai';
import getArticles from '../../src/js/actions/articleActions';
import dispatcher from '../../src/js/dispatcher';
import * as api from '../testHelper';

const response = api.apiArticleResponse;

const axiosSpy = sinon.stub(axios, 'get', () => {
  return Promise.resolve({
    data: response,
  });
});
const dispatcherSpy = sinon.spy(dispatcher, 'dispatch');

describe('getArticles action', () => {
  it('should be a function', () => {
    expect(getArticles).to.be.a('function');
  });

  it('should dispatch articles', () => {
    getArticles().then(() => {
      expect(axiosSpy.calledOnce).to.equal(true);
      expect(dispatcherSpy.calledOnce).to.equal(true);
      expect(dispatcherSpy.calledWith({
        type: 'GET_ARTICLES',
        articles: response.articles,
      })).to.equal(true);
    });
  });
});


