import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import SourceCard from '../../src/js/components/SourceCard';

describe('SourceCard component ', () => {
  const options = {
      source: { name: 'mySource' },
    };

  it('renders one <Card /> components', () => {
    const wrapper = shallow(<SourceCard {...options} />);
    expect(wrapper.find(Card)).to.have.length(1);
  });

  it('renders one <CardHeader /> components', () => {
    const wrapper = shallow(<SourceCard {...options} />);
    expect(wrapper.find(CardHeader)).to.have.length(1);
  });

  it('renders one <CardActions /> components', () => {
    const wrapper = shallow(<SourceCard {...options} />);
    expect(wrapper.find(CardActions)).to.have.length(1);
  });
});
