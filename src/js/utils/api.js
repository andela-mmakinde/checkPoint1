const axios = require('axios');

const apiKey = process.env.apiKey;

export function sources() {
  return axios.get('https://newsapi.org/v1/sources?language=en');
}

export function articles(sourceId, sortBy) {
  let url = `https://newsapi.org/v1/articles?source=${sourceId}&apiKey=${apiKey}`;
  if (sortBy) {
    url += `&sortBy=${sortBy}`;
  }
  return axios.get(url);
}




