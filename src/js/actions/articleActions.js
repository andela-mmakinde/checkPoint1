import dispatcher from '../dispatcher';
import * as apiCalls from '../utils/api';

/**
 * @function getArticles
 * This function calls the apiCalls method,
 * returns the news articles and
 * dispatches api response to the dispatcher.
 *
 * @param {string} sourceId
 * @param {string} sortBy
 * @returns {Void}
 */
const getArticles = (sourceId, sortBy) => {
  const availableArticles = apiCalls.articles(sourceId, sortBy);
  return availableArticles.then((response) => {
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
