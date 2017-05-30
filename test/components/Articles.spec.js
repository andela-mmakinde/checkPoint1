import React from 'react';
import 'jsdom-global/register';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Articles from '../../src/js/components/Articles';


describe('The Articles component ', () => {
  const state = {
    articles: [],
  };
  const options = {
    match: { params: { sourceId: 'mySource' } },
  };

  it('renders as a <div>', () => {
    const wrapper = shallow(<Articles />);
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
