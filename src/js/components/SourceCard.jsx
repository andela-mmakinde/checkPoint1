import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader } from 'material-ui/Card';

/**
 * @param {any} { source }
 */
const card = ({ source }) => (
  <Card className="card">
    <CardHeader
      title={source.name}
      subtitle={source.description}
    />
    <CardActions>
      <div className="button">
        <a href={`#/articles/${source.id}/${source.sortBysAvailable}`}>Get Articles</a>
      </div>
    </CardActions>
  </Card>
  );

card.defaultProps = {
  source: null,
};
card.propTypes = {
  source: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
  }),
};
export default card;
