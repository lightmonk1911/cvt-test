import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Profile from '../Components/Profile';
import EditableName from '../Components/name/EditableName';
import Cat from '../images/cat.png';
import EditableTel from '../Components/tel/EditableTel';
import EditableEmail from '../Components/email/EditableEmail';
import EditableInterests from '../Components/interests/EditableInterests';

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
    expect(wrapper.contains(
      <div className="avatar-section">
        <img id="avatar" src={Cat} alt="Cat" />
        <button type="button" id="add-to-freinds-btn">Добавить в друзья</button>
      </div>,
    )).toBe(true);
  });

  test('header', () => {
    expect(wrapper.find('div.main.profile > div.user-data > header')).toHaveLength(1);
    expect(wrapper.find('header').find(EditableName)).toHaveLength(1);
  });

  test('user-data section', () => {
    expect(wrapper.find('div.lined-user-data-section > div.inline-user-data > span.user-data-line-name')).toHaveLength(3);
    expect(wrapper.find('.inline-user-data').find(EditableTel)).toHaveLength(1);
    expect(wrapper.find('.inline-user-data').find(EditableEmail)).toHaveLength(1);
  });

  test('interests section', () => {
    expect(wrapper.find('div.main.profile > div.user-data > div.interests-section').find(EditableInterests)).toHaveLength(1);
  });
});
