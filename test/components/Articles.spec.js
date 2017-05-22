import React from 'react';
import 'jsdom-global/register';
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

  it('should return an instance of a class', () => {
    const wrapper = mount(<Articles {...options} />);
    const instance = wrapper.instance();
    expect(instance).to.be.instanceOf(Articles);
  });

  it('should have an initial empty array of articles', () => {
    const wrapper = shallow(<Articles />);
    expect(wrapper.state()).to.deep.equal(state);
  });

  it('calls componentDidMount', () => {
    sinon.spy(Articles.prototype, 'componentDidMount');
    const wrapper = mount(<Articles {...options} />);
    expect(Articles.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('contains a render method', () => {
    const wrapper = mount(<Articles {...options} />);
    expect(wrapper.instance().render()).to.be.defined;
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
