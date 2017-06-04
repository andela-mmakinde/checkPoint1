import React from 'react';
import 'jsdom-global/register';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { GridList } from 'material-ui/GridList';
import Sources from '../../src/js/components/Sources';


describe('The Source component', () => {
  const state = {
    sources: [],
  };
  const options = {
    state: { sources: { map: ('mySource') } },
  };

  it('renders without exploding', () => {
    expect(shallow(<Sources />).length).to.eql(1);
  });

  it('should have an initial empty array of articles', () => {
    const wrapper = shallow(<Sources />);
    expect(wrapper.state()).to.deep.equal(state);
  });

  it('renders as a <div>', () => {
    const wrapper = shallow(<Sources />);
    expect(wrapper.type()).to.eql('div');
  });

  it('has style to render it as grid', () => {
    const wrapper = shallow(<Sources />);
    const gridList = { height: 'auto' };
    expect(wrapper.find(GridList).node.props.style).to.eql(gridList);
    expect(wrapper.find(GridList).node.props.cellHeight).to.eql(220);
  });

  it('should have an input bar to receive user search query', () => {
    const wrapper = shallow(<Sources />);
    expect(wrapper.find('input').prop('type')).to.eql('text');
  });

  it('should contain a method filterSources', () => {
    const wrapper = shallow(<Sources />);
    wrapper.instance().filterSources;
  });

  it('contains a render method', () => {
    const wrapper = mount(<Sources {...options} />);
    expect(wrapper.instance().render()).to.be.defined;
  });
});
