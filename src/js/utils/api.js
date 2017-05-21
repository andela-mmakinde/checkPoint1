const axios = require('axios');

const apiKey = process.env.apiKey;

export function sources() {
  return axios.get('https://newsapi.org/v1/sources?language=en');
}

export function articles(sourceId, sortBy) {
  return axios.get(
    `https://newsapi.org/v1/articles?source=${sourceId}&
    sortBy=${sortBy}&apiKey=${apiKey}`,
    );
}

