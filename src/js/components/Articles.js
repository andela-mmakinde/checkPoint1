import React from 'react';
import store from '../stores/store';
import * as Actions from '../actions/naijActions';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
      const articleNodes = this.state.articles.map(article => (
        <MuiThemeProvider key={article.url}>
          <Card className="articles" >
            <CardMedia>
                <img src={article.urlToImage}/>
            </CardMedia>
            <CardTitle title={article.title}subtitle={article.author} />
            <CardText>
              {article.description}
            </CardText>
            <CardActions>
              <a target="_blank" href={article.url}>Read more</a> 
            </CardActions>
          </Card>
        </MuiThemeProvider>));

      return (
        <div>{articleNodes}</div>
      );
    }
    return (<div> Loading... </div>);
  }
}
