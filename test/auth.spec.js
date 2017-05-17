import React from 'react';
import { shallow } from 'enzyme';
import GoogleLogin from 'react-google-login';
import Auth from '../src/js/auth';


describe('Authentication', () => {
  beforeEach(() => {
    const wrapper = shallow(<Auth />);
  });

  it('should render 1 GoogleLogin component', () => {
    expect(wrapper.find(GoogleLogin)).to.have.length(1);
  });


  it('should exist', () => {
    expect(wrapper).to.exist;
  });
});
