import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Footer from '../../src/js/components/Footer';


describe('The component Footer', () => {
  it('renders as a <footer>', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.type()).to.eql('div');
  });
});
