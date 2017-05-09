import dispatcher from '../dispatcher';
import * as apiCalls from '../api';

export function fetchSources() {
  const data = apiCalls.sources();
  data.then((response) => {
    dispatcher.dispatch({
      type: 'FETCH_SOURCES',
      data: response.data.sources,
    });
  });
}

export function getArticles(sourceId, sortBy) {
  const data = apiCalls.articles(sourceId, sortBy);
  data.then((response) => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      data: response.data.articles,
    });
  }).catch((err) => {
    dispatcher.dispatch({
      type: 'GET_ARTICLES',
      err,
    });
  });
}
