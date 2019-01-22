import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import NavItem from '../NavItem';

beforeAll(() => {
  sinon.stub(console, 'error').callsFake((warning) => { throw new Error(warning); });
});
afterAll(() => { global.console.error.restore(); });

describe('static NavItem', () => {
  const changeTab = () => { };
  const wrapper = shallow(
    <NavItem
      active="profile"
      changeTab={changeTab}
      tabName="profile"
      text="Профиль"
    />,
  );

  test('should have class nav-item', () => {
    expect(wrapper.hasClass('nav-item')).toBe(true);
  });

  test('should contain button', () => {
    expect(wrapper.containsMatchingElement(
      <button
        type="button"
        className="nav-link active"
      >
        Профиль
      </button>,
    )).toBe(true);
  });

  test('should be PropTypes Error', (done) => {
    expect.assertions(1);
    try {
      shallow(<NavItem />);
    } catch (error) {
      expect(error).toBeTruthy();
    }
    done();
  });
});

describe('behavior', () => {
  test('should invoke changetab with "profile"', (done) => {
    expect.assertions(1);
    const changeTab = (tabName) => {
      expect(tabName).toBe('profile');
    };
    const wrapper = shallow(
      <NavItem
        active="profile"
        changeTab={changeTab}
        tabName="profile"
        text="Профиль"
      />,
    );
    wrapper.find('button').simulate('click');
    done();
  });
});
