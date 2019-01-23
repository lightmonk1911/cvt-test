import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Friends from '../Components/Friends';
import FriendCard from '../Components/FriendCard';
import pathsToAvatars from '../lib/pathsToAvatars';


beforeAll(() => {
  sinon.stub(console, 'error').callsFake((warning) => { throw new Error(warning); });
});
afterAll(() => { global.console.error.restore(); });

describe('static Friends', () => {
  const friendsList = [
    {
      name: 'Лев Бронштейн', city: 'Ханты-Мансийск', online: true, pathToAvatar: pathsToAvatars[0],
    },
    {
      name: 'Находка Капитал', city: 'Усть-Бельск', online: true, pathToAvatar: pathsToAvatars[1],
    },
  ];
  const wrapper = shallow(<Friends friendsList={friendsList} />);

  test('structure', () => {
    expect(wrapper.find('div.main.content-wrap > div.friends-tab > ul.friends-list')).toHaveLength(1);
    expect(wrapper.find(FriendCard)).toHaveLength(2);
  });

  test('should be PropTypes Error', (done) => {
    const badFriendsList = [
      { name: 'Лев Бронштейн', city: 'Усть-Бельск', online: 'true' },
      { name: 'Находка Капитал', city: 'Усть-Бельск', online: true },
    ];
    expect.assertions(1);
    try {
      shallow(<Friends />);
    } catch (error) {
      expect(error).toBeTruthy();
    }
    try {
      shallow(<Friends friendsList={badFriendsList} />);
    } catch (error) {
      expect(error).toBeTruthy();
    }
    done();
  });
});
