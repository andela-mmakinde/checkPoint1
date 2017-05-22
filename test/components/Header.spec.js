import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/js/components/Header';


describe('The Header component', () => {
  it('renders as a <header>', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.type()).to.eql('header');
  });

  it('should have 1 anchor tags that links back to sources', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('a')).to.have.length(1);
  });
});
