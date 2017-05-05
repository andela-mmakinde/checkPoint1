import dispatcher from "../dispatcher.js";
import * as  apiCalls from "../api.js";

export function fetchSources() {
	let data = apiCalls.sources();
	data.then((response) => {
		dispatcher.dispatch({
			type:'FETCH_SOURCES',
			data: response.data.sources,
		});
	});
}

export function getArticles(sourceId) {
	let data = apiCalls.articles(sourceId);
	data.then((response) => {
		dispatcher.dispatch({
			type:'GET_ARTICLES',
			data: response.data.articles,
		});
	});
}