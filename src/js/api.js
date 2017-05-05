const axios = require('axios');


export function sources() {
	return axios.get('https://newsapi.org/v1/sources?language=en')
}


export function articles(sourceId, sort_by){
	return axios.get(`https://newsapi.org/v1/articles?source=${sourceId||'techcrunch'}&sortBy=top&apiKey=213327409d384371851777e7c7f78dfe`)
}
