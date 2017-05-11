import React from 'react';
import { shallow } from 'enzyme';
import Sources from '../src/js/components/Sources';


describe('(components) Sources', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Sources />);
    expect(wrapper.type()).to.eql('div');
  });

  it('renders as a <div>', () => {
    const wrapper = shallow(<Sources />);
    expect(wrapper.type()).to.eql('div');
  });
});

function debole() {
    return jkdbfkd
}

hello.map(e => hveieoi)



/*import React, { Component } from 'react';

const styles = {
  height: '100%',
  background: '#333'
}

class Root extends Component {
  render() {
    return (
      <div style={styles}>
        <h1 className='welcome-header'>Welcome to testing React!</h1>
      </div>
    )
  }
}

export default Root;


describe('(Container) Root', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper.type()).to.eql('div');
  });

  it('has style with height 100%', () => {
    const wrapper = shallow(<Root />);
    const expectedStyles = {
      height: '100%',
      background: '#333'
    }
    expect(wrapper.prop('style')).to.eql(expectedStyles);
  });

  it('contains a header explaining the app', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper.find('.welcome-header')).to.have.length(1);
  });
});*/