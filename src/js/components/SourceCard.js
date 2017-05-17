import React from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';

const card = ({ source }) => {
  return (
    <Card className="card">
      <CardHeader
        title={source.name}
        subtitle={source.description}
      />
      <CardActions>
        <div className="button">
          <a href={`#/articles/${source.id}`}>Get Articles</a>
        </div>
      </CardActions>
    </Card>
  );
};


export default card;
