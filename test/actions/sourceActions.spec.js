import axios from 'axios';
import sinon from 'sinon';
import { expect } from 'chai';
import getSources from '../../src/js/actions/sourceActions';
import dispatcher from '../../src/js/dispatcher';
import * as api from '../testHelper';

const response = api.apiSourceResponse;

describe('getSources()', () => {
  it('should be a function', () => {
    expect(getSources).to.be.a('function');
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

    getSources().then(() => {
      expect(axiosSpy.calledOnce).to.equal(true);
      axios.get.restore();
    });
  });

  it('should have an action type FETCH_SOURCES ', () => {
    expect(
      dispatcherSpy.calledWith({
        type: 'FETCH_SOURCES',
        sources: response.sources,
      }),
    ).to.equal(true);
  });

  it('should call the dispatcher once', () => {
    expect(dispatcherSpy.calledOnce).to.equal(true);
  });
});
