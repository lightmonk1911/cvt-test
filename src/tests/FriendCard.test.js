import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import FriendCard from '../Components/FriendCard';
import pathsToAvatars from '../lib/pathsToAvatars';

beforeAll(() => {
  sinon.stub(console, 'error').callsFake((warning) => { throw new Error(warning); });
});
afterAll(() => { global.console.error.restore(); });

describe('static FriendCard', () => {
  const friend = {
    name: 'Лев Бронштейн', city: 'Ханты-Мансийск', online: true, pathToAvatar: pathsToAvatars[0],
  };
  const wrapper = shallow(<FriendCard {...friend} />);
  test('structure', () => {
    expect(wrapper.contains(
      <li className="friend-card">
        <img src="1.jpg" alt="Фото Лев Бронштейн" className="small-avatar" />
        <div className="friend-data">
          <h3><button className="link-styled friend-name" type="button">Лев Бронштейн</button></h3>
          <p className="friend-city">г. Ханты-Мансийск</p>
          <small className="friend-online-status">Online</small>
        </div>
      </li>,
    ));
  });
  test('should be PropTypes Error', (done) => {
    expect.assertions(1);
    try {
      shallow(<FriendCard />);
    } catch (error) {
      expect(error).toBeTruthy();
    }
    done();
  });
});
