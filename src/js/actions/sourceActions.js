import dispatcher from '../dispatcher';
import * as apiCalls from '../api';

/**
 * This function fetches news sources from the api
 */
const fetchSources = () => {
  const availableSources = apiCalls.sources();
  availableSources.then((response) => {
    dispatcher.dispatch({
      type: 'FETCH_SOURCES',
      sources: response.data.sources,
    });
  });
};
export default fetchSources;
