import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import GoogleLogin from 'react-google-login';

import { Login } from '../../src/js/components/GoogleLogin.jsx';

describe('GoogleLogin Component', () => {
  it('should render 1 GoogleLogin component', () => {
    const wrapper = shallow(<Login />);
    console.log(wrapper);
    expect(wrapper.find(GoogleLogin)).to.have.length(1);
  });

  it('should render a html container', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.type()).to.eql('GoogleLogin');
  });
});
