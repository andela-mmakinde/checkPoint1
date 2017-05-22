import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const ellipsis = (text, length) => text.length > length ? `${text.substr(0, length - 1)}...` : text;

const card = ({ article }) => (
  <div className="floating-box">
    <Card className="articles">
      <CardMedia>
        <img alt="Article" className="img" src={article.urlToImage} height="200px" />
      </CardMedia>
      <CardTitle
        className="cardTitle" title={ellipsis(article.title, 40)}
        subtitle={ellipsis(article.author || article.url, 30)} 
      />
      <CardText>
        {ellipsis(article.description, 80)}
      </CardText>
      <CardActions>
        <div className="article">
          <a className="button" rel="noopener noreferrer" target="_blank" href={article.url}>Read more</a>
        </div>
      </CardActions>
    </Card>
  </div>
  );

export default card;
