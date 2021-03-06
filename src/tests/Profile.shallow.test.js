import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Profile from '../Components/Profile';
import InlineUserData from '../Components/InlineUserData';
import EditableInterests from '../Components/interests/EditableInterests';
import AvatarSection from '../Components/AvatarSection';

const fakeLocalStorage = {};

beforeAll(() => {
  sinon.stub(localStorage, 'getItem').callsFake(key => fakeLocalStorage[key]);
  sinon.stub(localStorage, 'setItem').callsFake((key, value) => { fakeLocalStorage[key] = value.toString(); });
});

describe('should have init state', () => {
  test('name', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.state('name')).toBe('Виталя Гора');
  });

  test('tel', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.state('tel')).toBe('74405543212');
  });

  test('email', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.state('email')).toBe('vitalya@gora.ru');
  });

  test('interests', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.state('interests')).toEqual(['музыка', 'компьютеры', 'радио']);
  });

  test('editingField', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper.state('editingField')).toBe('');
  });
});

describe('static Profile', () => {
  const wrapper = shallow(<Profile />);
  test('avatar section', () => {
    expect(wrapper.find(AvatarSection)).toHaveLength(1);
  });

  test('header', () => {
    expect(wrapper.find('div.main.profile > div.user-data > header')).toHaveLength(1);
    expect(wrapper.find('header > h2')).toHaveLength(1);
  });

  test('user-data section', () => {
    expect(wrapper.find('.lined-user-data-section').find(InlineUserData)).toHaveLength(3);
  });

  test('interests section', () => {
    expect(wrapper.find('div.main.profile > div.user-data > div.interests-section').find(EditableInterests)).toHaveLength(1);
  });
});
