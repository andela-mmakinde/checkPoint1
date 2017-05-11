import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Articles from '../../src/js/components/Articles';


describe('The component Articles', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Articles />);
    expect(wrapper.type()).to.eql('div');
  });
});
