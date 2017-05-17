import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const card = ({ article }) => {
  return (
    <Card className="articles">
      <CardMedia>
        <img alt="Article Image" className="img" src={article.urlToImage} />
      </CardMedia>
      <CardTitle title={article.title}subtitle={article.author} />
      <CardText>
        {article.description}
      </CardText>
      <CardActions>
        <div className="article">
          <a className="button" rel="noopener noreferrer" target="_blank" href={article.url}>Read more</a>
        </div>
      </CardActions>
    </Card>
  );
};

export default card;
