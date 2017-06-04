import React from 'react';
import PropTypes from 'prop-types';
import { Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText } from 'material-ui/Card';
import ellipsis from '../utils/utils';

/**
 * @param {any} { article }
 */
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

card.defaultProps = {
  article: null,
};
card.propTypes = {
  article: PropTypes.shape({
    urlToImage: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default card;
