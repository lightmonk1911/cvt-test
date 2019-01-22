import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Main from '../Main';
import Profile from '../Profile';
import Friends from '../Friends';

beforeAll(() => {
  sinon.stub(console, 'error').callsFake((warning) => { throw new Error(warning); });
});
afterAll(() => { global.console.error.restore(); });

describe('should change tabs', () => {
  test('should be Profile', () => {
    const wrapper = shallow(<Main active="profile" />);
    expect(wrapper.find(Profile)).toHaveLength(1);
    expect(wrapper.find(Friends)).toHaveLength(0);
  });

  test('should be Friends', () => {
    const wrapper = shallow(<Main active="friends" />);
    expect(wrapper.find(Profile)).toHaveLength(0);
    expect(wrapper.find(Friends)).toHaveLength(1);
  });

  test('should be Error', (done) => {
    expect.assertions(1);
    try {
      shallow(<Main />);
    } catch (error) {
      expect(error).toBeTruthy();
      done();
    }
    done();
  });
});
