import React from 'react';
import store from '../stores/store';
import * as Actions from '../actions/naijActions';

export default class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }
  componentWillMount() {
    Actions.getArticles();
    store.on('change', this.getArticleList.bind(this))
  }

  getArticleList(){
    this.setState({
      articles: store.getArticles(),
    })
  }
  
  render() {
    if (this.state.articles) {
      const articleNodes = this.state.articles.map(article => (<div key={article.url} className="card card--small">
        <div className="card__image">
          <img src={article.urlToImage} />
        </div>
        <div className="card__action-bar">{article.author}</div>
        <div className="title">{article.title}</div>
        <div className="site_url"><a href={article.url} target="_blank">{article.url}</a></div>
      </div>));

      return (
        <div>{articleNodes}</div>
      );
    }
    return (<div> Loading... </div>);
  }
}
