import dispatcher from '../dispatcher';
import * as apiCalls from '../utils/api';

/**
 * @function getSources
 * This function calls the api method,
 * returns the news sources and
 * dispatches api response to the dispatcher.
 * @returns {Void}
 */
const getSources = () => {
  const availableSources = apiCalls.sources();
  return availableSources.then((response) => {
    dispatcher.dispatch({
      type: 'FETCH_SOURCES',
      sources: response.data.sources,
    });
  }).catch((err) => {
    dispatcher.dispatch({
      type: 'ERROR',
      err,
    });
  });
};

export default getSources;
