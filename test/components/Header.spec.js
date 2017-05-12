import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from '../../src/js/components/Header';

describe('The component Header', () => {
  it('renders as a <header>', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.type()).to.eql('header');
  });
});
