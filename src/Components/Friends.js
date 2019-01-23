import React from 'react';
import PropTypes from 'prop-types';
import FriendCard from './FriendCard';

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
    avatarNumber: PropTypes.number.isRequired,
  })),
};

Friends.defaultProps = {
  friendsList: [
    {
      name: 'Лев Бронштейн', city: 'Ханты-Мансийск', online: true, avatarNumber: 1,
    },
    {
      name: 'Находка Капитал', city: 'Усть-Бельск', online: true, avatarNumber: 2,
    },
    {
      name: 'Яндекс Петренко', city: 'Пермь', online: true, avatarNumber: 3,
    },
    {
      name: 'Успех Возможностей', city: 'Радонеж', online: true, avatarNumber: 4,
    },
    {
      name: 'Инна Нашлась', city: 'Омск', online: true, avatarNumber: 5,
    },
    {
      name: 'Алла Подольская', city: 'Петропавловск-Камчатский', online: true, avatarNumber: 6,
    },
  ],
};

export default Friends;
