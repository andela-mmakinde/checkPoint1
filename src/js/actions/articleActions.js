import dispatcher from '../dispatcher';
import * as apiCalls from '../utils/api';

/**
 * @function getArticles
 * This function call the apiCalls method,
 * returns the news articles and
 * dispatches api response to the dispatcher.
 * @param {string} sourceId - The news source
 * @param {string} sortBy - The sort option for the news Article.
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
