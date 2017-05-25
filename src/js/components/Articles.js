import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getArticles from '../actions/articleActions';
import Card from './ArticleCard';
import articleStore from '../stores/articleStore';
import { login } from './GoogleLogin';

/**
 * Create a react component
 * @class Article
 */

export default class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
    this.sortArticle = this.sortArticle.bind(this);
    this.setArticlesList = this.setArticlesList.bind(this);
    this.sortArticleButton = this.sortArticleButton.bind(this);
  }

  /**
   * Add an event Listener to the Articles Store and fires when the component is fully mounted
   * @method componentDidMount
   * @returns {event} - register event
   */

  componentDidMount() {
    articleStore.on('change', this.setArticlesList);
    getArticles(this.props.match.params.sourceId);
  }

/**
   * Remove event listener from the Articles store
   * @method componentWilUnMount
   * @return {event} - removes event
   */

  componentWillUnmount() {
    articleStore.removeListener('change', this.setArticlesList);
  }

  /**
   * gets the list of news Articles and sets the state
   * @method setArticlesList
   * @return {state} - Set Articles to the state
   */

  setArticlesList() {
    this.setState({
      articles: articleStore.getArticles(),
    });
  }

 /**
   * calls an action getArticles on selecting the sort parameter
   * @method sortArticle
   * @param evt
   */
  sortArticle(evt) {
    getArticles(this.props.match.params.sourceId, evt.target.value);
  }

  sortArticleButton() {
    const sortOptions = this.props.match.params.sorts.split(',');
    return (
      <form className="sort">
        <span>Sort articles by: </span>
        { sortOptions.map((sortType) => {
          return (
            <span key={sortType}>
              <input
                type="radio" name="sort" value={sortType} className="radio"
                onClick={this.sortArticle}
              />{sortType.toLowerCase()}</span>
          );
        },
          )}
      </form>);
  }

 /**
   * Render react component
   * @method render
   * @return {function} react-component
   */

  render() {
    // check if a users details are present in the local storage.
    if (localStorage.user) {
      if (this.state.articles) {
        let articleNodes;
        // check if the articles array returned is not empty
        if (this.state.articles.length) {
          articleNodes = this.state.articles.map(article => (
            <Card article={article} key={article.url} />
          ));
        } else { return (<div> Loading... </div>); }
        return (<div className="mainBody">
          <MuiThemeProvider>
            <div>
              <div>{this.sortArticleButton()}</div>
              {articleNodes}
            </div>
          </MuiThemeProvider>
        </div>
        );
      }
    }
    return (<div>
      <div className="loggedOut">Please sign in to view</div>
      <div className="signInToView">{login}</div>
    </div>);
  }
}
