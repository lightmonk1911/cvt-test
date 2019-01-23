import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Navbar from '../Components/Navbar';
import NavItem from '../Components/NavItem';

beforeAll(() => {
  sinon.stub(console, 'error').callsFake((warning) => { throw new Error(warning); });
});
afterAll(() => { global.console.error.restore(); });

describe('static Navbar', () => {
  const changeTab = () => { };
  const wrapper = shallow(
    <Navbar active="profile" changeTab={changeTab} />,
  );
  test('should have ul with two NavItems', () => {
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find(NavItem)).toHaveLength(2);
    expect(wrapper.contains(
      <NavItem
        key="profile"
        text="Профиль"
        tabName="profile"
        changeTab={changeTab}
        active="profile"
      />,
    )).toBe(true);
    expect(wrapper.contains(
      <NavItem
        key="friends"
        text="Друзья пользователя"
        tabName="friends"
        changeTab={changeTab}
        active="profile"
      />,
    )).toBe(true);
  });

  test('should be PropTypes Error', (done) => {
    expect.assertions(3);
    try {
      shallow(<Navbar />);
    } catch (error) {
      expect(error).toBeTruthy();
    }
    try {
      shallow(<Navbar active="friends" />);
    } catch (error) {
      expect(error).toBeTruthy();
    }
    try {
      shallow(<Navbar changeTab={() => { }} />);
    } catch (error) {
      expect(error).toBeTruthy();
    }
    done();
  });
});
