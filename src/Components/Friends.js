import React from 'react';
import PropTypes from 'prop-types';
import FriendCard from './FriendCard';
import pathsToAvatars from '../lib/pathsToAvatars';

const Friends = ({ friendsList }) => (
  <div className="main content-wrap">
    <div className="friends-tab">
      <ul className="friends-list">
        {friendsList.map(friend => (
          <FriendCard {...friend} key={friend.name} />
        ))}
      </ul>
    </div>
  </div>
);

Friends.propTypes = {
  friendsList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    pathToAvatar: PropTypes.string.isRequired,
  })),
};

Friends.defaultProps = {
  friendsList: [
    {
      name: 'Лев Бронштейн', city: 'Ханты-Мансийск', online: true, pathToAvatar: pathsToAvatars[0],
    },
    {
      name: 'Находка Капитал', city: 'Усть-Бельск', online: true, pathToAvatar: pathsToAvatars[1],
    },
    {
      name: 'Яндекс Петренко', city: 'Пермь', online: true, pathToAvatar: pathsToAvatars[2],
    },
    {
      name: 'Успех Возможностей', city: 'Радонеж', online: true, pathToAvatar: pathsToAvatars[3],
    },
    {
      name: 'Инна Нашлась', city: 'Омск', online: true, pathToAvatar: pathsToAvatars[4],
    },
    {
      name: 'Алла Подольская', city: 'Петропавловск-Камчатский', online: true, pathToAvatar: pathsToAvatars[5],
    },
  ],
};

export default Friends;
