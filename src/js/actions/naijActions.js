import dispatcher from '../dispatcher';
import * as apiCalls from '../api';

/**
 * This function fetches news sources from the api
 */
export const fetchSources = () => {
  const availableSources = apiCalls.sources();
  availableSources.then((response) => {
    dispatcher.dispatch({
      type: 'FETCH_SOURCES',
      sources: response.data.sources,
    });
  });
};

/**
 * This function fetches news headlines from the api.
 */
export const getArticles = (sourceId, sortBy) => {
  const availableArticles = apiCalls.articles(sourceId, sortBy);
  availableArticles.then((response) => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      articles: response.data.articles,
    });
  }).catch((err) => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      err,
    });
  });
};
