import React from 'react';
import { shallow } from 'enzyme';
import Articles from '../../src/js/components/Articles';


describe('The Articles component ', () => {
  const state = {
    articles: [],
  };

  it('renders as a <div>', () => {
    const options = {
      match: { params: { sourceId: 'mySource' } },
    };
    const wrapper = shallow(<Articles {...options} />);
    expect(wrapper.type()).to.eql('div');
  });

  it('should have an initial empty array of articles', () => {
    const wrapper = shallow(<Articles />);
    expect(wrapper.state()).to.deep.equal(state);
  });

  it('should contain a method sortArticles', () => {
    const wrapper = shallow(<Articles />);
    wrapper.instance().sortArticle;
  });

  it('should contain a method setArticlesList', () => {
    const wrapper = shallow(<Articles />);
    wrapper.instance().setArticlesList;
  });

  it('should contain a method sortArticleButton ', () => {
    const wrapper = shallow(<Articles />);
    wrapper.instance().sortArticleButton;
  });
});
