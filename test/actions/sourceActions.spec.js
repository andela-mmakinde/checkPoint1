import { expect } from 'chai';
import getSources from '../../src/js/actions/articleActions';

describe('getSources()', () => {
  it('should be a function', () => {
    expect(getSources).to.be.a('function');
  });
});
