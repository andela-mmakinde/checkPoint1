import React from 'react';
import { shallow } from 'enzyme';
import { Card, CardActions, CardMedia } from 'material-ui/Card';
import ArticleCard from '../../src/js/components/ArticleCard';

describe('Test for <ArticleCard /> components', () => {
  const article = {
    article: { urlToImage: 'me.jpg', author: 'foo', title: 'bar', description: 'foobar' },
  };
  it('renders a CardHeader', () => {
    const wrapper = shallow(<ArticleCard {...article} />);
    expect(wrapper.find(CardMedia)).to.have.length(1);
  });
  it('renders one <Card /> component', () => {
    const wrapper = shallow(<ArticleCard {...article} />);
    expect(wrapper.find(Card)).to.have.length(1);
  });
  it('renders one <CardActions /> components', () => {
    const wrapper = shallow(<ArticleCard {...article} />);
    expect(wrapper.find(CardActions)).to.have.length(1);
  });
});
