import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Sources from '../../src/js/components/Sources';


describe('The component Sources', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Sources />);
    expect(wrapper.type()).to.eql('div');
  });
});
