[![Build Status](https://travis-ci.org/andela-mmakinde/checkPoint1.svg?branch=master)](https://travis-ci.org/andela-mmakinde/checkPoint1) [![Coverage Status](https://coveralls.io/repos/github/andela-mmakinde/checkPoint1/badge.svg?branch=master)](https://coveralls.io/github/andela-mmakinde/checkPoint1?branch=master) [![Code Climate](https://codeclimate.com/github/andela-mmakinde/checkPoint1/badges/gpa.svg)](https://codeclimate.com/github/andela-mmakinde/checkPoint1)

# newsApp
A news feed application that delivers news headlines ranging from sports, to politics, business, entertainment, etc. from sources all around the world. It allows you to view news headlines from different
news sources globally(e.g Al Jazeera,BuzzFeed, CNN, Bild, Ars Technica, BBC Sport, Mirror, MTV News, TechCrunch e.t.c).
With newsApp, Users can access the page to view the news sources avalaible to view articles from without logging in and can also search through a list of the news sources. But they will be required to login with Google+ in order to view news articles, sort
headlines for these news sources based on options(Top, Latest, Popular).

### Development

newsApp is built using ReactJS, React-router for routing and it
consumes a public api from the endpoints on
newsapi.org. The tests have been written using Mocha, Chai expect syntax and
Enzyme.


### Features

* Google+ sign-in
* List of news sites available.
* View news for preferred source.
* Sort through news headlines(Top, Latest, Popular).

### User Guide

* Visit  https://naijnews.herokuapp.com to use this app.
* When the app has started, a list of sources available to view news articles from is displayed.
* Users would be required to login to read news articles based on the sources listed.
* Users can sort the article based on the sort parameters provided on the top-left corner of page.

### How To Contribute

* Fork this repository and clone the repository.
* Make all changes in a new feature branch.
* Create a pull request to the develop branch of this repo stating the features you implemented in your PR.

### Core Technologies

* React: Used to build the web pages and structure them as a collection of components. (https://facebook.github.io/react/)
* React-Router: Used for routing in the app (https://www.npmjs.com/package/react-router)
* Node.js: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine and NPM was used to install all node packages (https://nodejs.org/en/)
* Webpack: A module bundler for modern JavaScript applications  (https://webpack.github.io/)
* Babel: Transpiles ES6 syntax to ES5 (https://babeljs.io/)
* Express: Used as the web server (https://expressjs.com/)
* axios: http client library for making api calls (https://www.npmjs.com/package/axios)

### Resources

* News api: provides endpoints for news sources and headlines (newsapi.org)

### Limitations

* Users cannot bookmark/favourite headlines currently
* Users cannot view Articles within the application.

### License

  *  **MIT**

## Author

**Mayowa Makinde**
(https://www.linkedin.com/in/makinde-mayowa-650b148b).

