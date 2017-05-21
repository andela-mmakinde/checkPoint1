import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { GridList } from 'material-ui/GridList';
import Sources from '../../src/js/components/Sources';



describe('The Source component', () => {

  it('renders without exploding', () => {
    expect(shallow(<Sources />).length).to.eql(1);
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
});
