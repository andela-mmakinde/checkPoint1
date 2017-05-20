import dispatcher from '../dispatcher';
import * as apiCalls from '../api';

/**
 * This function fetches news headlines from the api.
 */
const getArticles = (sourceId, sortBy) => {
  const availableArticles = apiCalls.articles(sourceId, sortBy);
  availableArticles.then((response) => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      articles: response.data.articles,
    });
  }).catch((err) => {
    dispatcher.dispatch({
      type: 'ERROR',
      err,
    });
  });
};

export default getArticles;
