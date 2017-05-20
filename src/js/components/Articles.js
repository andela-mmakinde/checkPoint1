import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getArticles from '../actions/articleActions';
import Card from './ArticleCard';
import * as auth from '../auth';
import articleStore from '../stores/articleStore';


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

// componentDidMount - Runs when component is loaded
  componentDidMount() {
    articleStore.on('change', this.setArticlesList);
    getArticles(this.props.match.params.sourceId);
  }

  componentWillUnmount() {
    articleStore.removeListener('change', this.setArticlesList);
  }

  setArticlesList() {
    this.setState({
      articles: articleStore.getArticles(),
    });
  }

  sortArticle(evt) {
    getArticles(this.props.match.params.sourceId, evt.target.value);
  }

  sortArticleButton() {
    return (
      <form className="sort">
        <label>Sort articles by: </label>
        <input
          type="radio" name="sort" value="top" className="radio"
          defaultChecked="checked" onClick={this.sortArticle}
        />Top
        <input
          type="radio" name="sort" value="latest" className="radio"
          onClick={this.sortArticle}
        />Latest
        <input
          type="radio" name="sort" value="popular" className="radio"
          onClick={this.sortArticle}
        />Popular
      </form>);
  }


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
        } else {
          articleNodes = (<div className="articles"> No articles found </div>);
        }

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
      return (<div> Loading... </div>);
    }
    return (<div>
      <div className="loggedOut">Please sign in to view</div>
    </div>);
  }
}
