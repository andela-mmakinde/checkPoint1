import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Articles from '../../src/js/components/Articles';


describe('The component Articles', () => {
  it('renders as a <div>', () => {
    const options = {
      match: { params: { sourceId: 'mySource' } },
    };
    const wrapper = shallow(<Articles {...options} />);
    expect(wrapper.type()).to.eql('div');
  });
});
