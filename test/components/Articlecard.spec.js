import React from 'react';
import { shallow } from 'enzyme';
import { Card, CardActions, CardMedia } from 'material-ui/Card';
import ArticleCard from '../../src/js/components/ArticleCard';

describe('The article card component', () => {
  const article = {
    article: { urlToImage: 'me.jpg', author: 'foo', title: 'bar', description: 'foobar' },
  };
  it('renders a CardMedia', () => {
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

  // it('has a function ellipsis that sets the length of text', () => {
  //   const wrapper = shallow(<ArticleCard {...article} />);
  //   expect(wrapper.find(CardActions)).to.have.length(1);
  // });
});
