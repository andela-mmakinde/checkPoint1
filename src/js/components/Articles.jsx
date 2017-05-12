import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import store from '../stores/store';
import * as Actions from '../actions/naijActions';

export default class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };

    this.setArticlesList = this.setArticlesList.bind(this);
  }

  componentWillMount() {
    Actions.getArticles(this.props.match.params.sourceId);
    store.on('change', this.setArticlesList);
  }

  componentWillUnmount() {
    store.removeListener('change', this.setArticlesList);
  }

  setArticlesList() {
    this.setState({
      articles: store.getArticles(),
    });
  }

  sortArticle(e) {
    Actions.getArticles(this.props.match.params.sourceId, e.target.value);
  }

  render() {
    if (this.state.articles) {
      let articleNodes;

      if (this.state.articles.length) {
        articleNodes = this.state.articles.map(article => (
          <Card className="articles" key={article.url}>
            <CardMedia>
              <img alt="" className="img" src={article.urlToImage} />
            </CardMedia>
            <CardTitle title={article.title}subtitle={article.author} />
            <CardText>
              {article.description}
            </CardText>
            <CardActions>
              <div className="button article">
                <a rel="noopener noreferrer" target="_blank" href={article.url}>Read more</a>
              </div>
            </CardActions>
          </Card>
          ));
      } else {
        articleNodes = (<div className="articles"> No articles found </div>);
      }

      return (<div>
        <MuiThemeProvider>
          <div>
            <form className="sort">
              <label>Sort articles by: </label>
              <input
                type="radio" name="sort" value="top" className="radio"
                onClick={this.sortArticle.bind(this)}
              />Top
              <input
                type="radio" name="sort" value="latest" className="radio"
                onClick={this.sortArticle.bind(this)}
              />Latest
              <input
                type="radio" name="sort" value="popular" className="radio"
                onClick={this.sortArticle.bind(this)}
              />Popular
            </form>
            <div>{articleNodes}</div>
          </div>
        </MuiThemeProvider>
      </div>
      );
    }
    return (<div> Loading... </div>);
  }
}
