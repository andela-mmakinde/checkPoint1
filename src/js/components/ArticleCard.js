import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const card = ({ article }) => (
  <div className="floating-box">
    <Card className="articles">
      <CardMedia>
        <img alt="Article" className="img" src={article.urlToImage} />
      </CardMedia>
      <CardTitle className="cardTitle"title={article.title}subtitle={article.author} />
      <CardText>
        {article.description}
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
