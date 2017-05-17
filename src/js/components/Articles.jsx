import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../stores/store';
import * as Actions from '../actions/naijActions';
import * as auth from '../auth';
import Card from './ArticleCard.jsx';

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

  componentWillMount() {
    store.on('change', this.setArticlesList);
  }

  componentDidMount() {
    Actions.getArticles(this.props.match.params.sourceId);
  }

  componentWillUnmount() {
    store.removeListener('change', this.setArticlesList);
  }

  setArticlesList() {
    this.setState({
      articles: store.getArticles(),
    });
  }

  sortArticle(evt) {
    Actions.getArticles(this.props.match.params.sourceId, evt.target.value);
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
    if (localStorage.user) {
      if (this.state.articles) {
        let articleNodes;

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
              <div>{articleNodes}</div>
            </div>
          </MuiThemeProvider>
        </div>
        );
      }
      return (<div> Loading... </div>);
    }
    return (<div className="loggedOut">Please login to view</div>);
  }
}
