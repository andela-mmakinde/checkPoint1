import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader } from 'material-ui/Card';

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


card.propTypes = {
  source: PropTypes.object,
};
card.defaultProps = {
  source: null,
};
export default card;
