import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { GridList } from 'material-ui/GridList';
import Sources from '../../src/js/components/Sources';
import Actions from '../../src/js/actions/naijActions';
import sinon from 'sinon';


describe('The component Sources', () => {
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
    // console.log(wrapper.find(GridList).node.props);
    expect(wrapper.find(GridList).node.props.style).to.eql(gridList);
    expect(wrapper.find(GridList).node.props.cellHeight).to.eql(180);
  });


  it('should have an input bar to receive user search query', () => {
    const wrapper = shallow(<Sources />);
    expect(wrapper.find('input').prop('type')).to.eql('text');
  });
  // it('calls fetchSources when componentWillMount is called', () => {
  //   const Action = {
  //     fetchSources() {
  //       return 'sources';
  //     },
  //   };
  //   const fetchSources = Action.fetchSources();
  //   const wrapper = shallow(<Sources />);
  //   console.log(wrapper.instance().getSourceList);
  //   // wrapper.instance().componentWillMount();
  //   // expect(wrapper.instance().getSourceList()).to.be.true;
  // });
});
