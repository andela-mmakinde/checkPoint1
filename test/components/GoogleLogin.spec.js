import { expect } from 'chai';
import sinon from 'sinon';
import { responseGoogle, logout } from '../../src/js/components/GoogleLogin.jsx';

describe('The function responseGoogle()', () => {
  it('should store user data in the local storage', () => {
    const profile = {
      getBasicProfile: () => (
        {
          getName: () => (
            'mayor'
          ),
          getEmail: () => (
            'mail'
          ),
          getImageUrl: () => (
            'image'
          ),
        }
      ),
    };
    const locationSpy = sinon.spy(location, 'reload');
    location.reload();
    sinon.assert.calledOnce(locationSpy);
    const expectedStorage = { user: '{"username":"mayor","email":"mail","image":"image"}' };
    expect(locationSpy.calledOnce).to.be.true;
    responseGoogle(profile);
    expect(localStorage).to.eqls(expectedStorage);
    locationSpy.restore();
  });
  describe('The function logout()', () => {
    it('contains a method preventDefault that initializes when logout() is called', () => {
      const evt = {
        preventDefault: sinon.spy(),
      };
      logout(evt);
      expect(evt.preventDefault.calledOnce).to.be.true;
    });
  });
});

