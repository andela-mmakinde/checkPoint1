import React from 'react';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import PropTypes from 'prop-types';

const card = ({article}) => {
  return (
    <Card className="articles">
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
  );
};

export default card;
