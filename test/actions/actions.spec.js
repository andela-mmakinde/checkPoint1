import React from 'react';
import { expect } from 'chai';
import * as Actions from '../../src/js/actions/naijActions';
import * as apiCalls from '../../src/js/api';
import * as dispatcher from '../../src/js/dispatcher';

describe('Actions', () => {
  const apiResponse = {
    status: 'ok',
    source: 'techcrunch',
    sortBy: 'top',
    articles: [
      {
        author: 'Lucas Matney',
        title: 'UploadVR sued over ‘rampant’ sexual behavior in the workplace and wrongful termination',
        description: 'UploadVR is being sued by the company’s former Director of Digital and Social Media for sexual harassment, sex and gender discrimination and wrongful..',
        url: 'https://techcrunch.com/2017/05/15/uploadvr-sued-over-rampant-sexual-behavior-in-the-workplace-and-wrongful-termination/',
        urlToImage: 'https://tctechcrunch2011.files.wordpress.com/2017/05/upload_office.jpeg?w=764&h=400&crop=1',
        publishedAt: '2017-05-15T22:04:00Z',
      },
      {
        author: 'Matthew Lynley',
        title: 'WeWork’s Adam Neumann on how to hit $1B in revenue with a careful balance',
        description: 'WeWork, which is said to be raising as much as $4 billion at a valuation of more than $20 billion, is still on its way to hitting $1 billion in annual revenue..',
        url: 'https://techcrunch.com/2017/05/15/weworks-adam-neumann-on-how-to-hit-1b-in-revenue-with-a-careful-balance/',
        urlToImage: 'https://tctechcrunch2011.files.wordpress.com/2017/05/tcdisrupt-ny17-8732.jpg?w=764&h=400&crop=1',
        publishedAt: '2017-05-15T18:34:27Z',
      },
    ],
  };
  it('should should have a function fetchSources', () => {
    expect(Actions.fetchSources).to.exist;
  });

  it('should should have a function getArticles', () => {
    expect(Actions.getArticles).to.exist;
  });

  it('should send information received from the api to the dispatcher', () => {
    dispatcher.dispatch({
      type: 'FETCH_SOURCES',
      sources: apiResponse,
    });
    expect(apiResponse).to.exist;
  });
});
