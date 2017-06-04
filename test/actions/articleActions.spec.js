import axios from 'axios';
import sinon from 'sinon';
import { expect } from 'chai';
import getArticles from '../../src/js/actions/articleActions';
import dispatcher from '../../src/js/dispatcher';
import * as api from '../testHelper';

const response = api.apiArticleResponse;

describe('getArticles() ', () => {
  it('should be a function', () => {
    expect(getArticles).to.be.a('function');
  });

  let dispatcherSpy;

  before(() => {
    dispatcherSpy = sinon.spy(dispatcher, 'dispatch');
  });

  after(() => {
    dispatcher.dispatch.restore();
  });

  it('should dispatch articles', () => {
    const axiosSpy = sinon.stub(axios, 'get', () =>
      Promise.resolve({
        data: response,
      }),
    );

    getArticles().then(() => {
      expect(axiosSpy.calledOnce).to.equal(true);

      axios.get.restore();
    });
  });

  it('should have an action type GET_ARTICLES ', () => {
    expect(
      dispatcherSpy.calledWith({
        type: 'GET_ARTICLES',
        articles: response.articles,
      }),
    ).to.equal(true);
  });

  it('should call the dispatcher once', () => {
    expect(dispatcherSpy.calledOnce).to.equal(true);
  });
});
