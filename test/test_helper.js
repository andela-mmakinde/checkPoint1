import { expect } from 'chai';
import sinon from 'sinon';

const apiArticleResponse = {
  status: 'ok',
  source: 'techcrunch',
  sortBy: 'top',
  articles: [
    {
      author: 'Darrell Etherington',
      title: 'SpaceX successfully launches its heaviest geostationary orbital payload yet',
      description: 'SpaceX launched a Falcon 9 rocket carrying a payload from communications satellite operate Inmarsat, the fourth in a constellation created to provide..',
      url: 'https://techcrunch.com/2017/05/15/spacex-successfully-launches-its-heaviest-geostationary-orbital-payload-yet/',
      urlToImage: 'https://tctechcrunch2011.files.wordpress.com/2017/05/spacex-launch-may-15-17-compressor.gif?w=680&h=376&crop=1',
      publishedAt: '2017-05-15T23:37:31Z',
    },
  ],
};

const apiSourceReponse = {
  status: 'ok',
  sources: [
    {
      id: 'abc-news-au',
      name: 'ABC News (AU)',
      description: "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
      url: 'http://www.abc.net.au/news',
      category: 'general',
      language: 'en',
      country: 'au',
      urlsToLogos: {
        small: '',
        medium: '',
        large: '',
      },
      sortBysAvailable: [
        'top',
      ],
    },
  ],
};

global.expect = expect;
global.sinon = sinon;
