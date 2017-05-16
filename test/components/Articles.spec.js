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

  it('should contain 3 radio buttons to allow users sort through articles', () => {
    const wrapper = shallow(<Articles />);
    expect(wrapper.find('input')).to.have.length(3);
  });

  it ('should load any article clicked on a new tab', () => {
    const wrapper = shallow(<Articles />);
    console.log(wrapper.find('a'));
  })
});
