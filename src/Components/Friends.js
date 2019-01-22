import React from 'react';
import PropTypes from 'prop-types';
import FriendCard from './FriendCard';

const Friends = ({ friendsList }) => (
  <div className="main content-wrap">
    <section className="friends-tab">
      <ul className="friends-list">
        {friendsList.map((friend, index) => (
          <FriendCard {...friend} index={index} key={friend.name} />
        ))}
      </ul>
    </section>
  </div>
);

Friends.propTypes = {
  friendsList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  })),
};

Friends.defaultProps = {
  friendsList: [
    { name: 'Лев Бронштейн', city: 'Ханты-Мансийск', online: true },
    { name: 'Находка Капитал', city: 'Усть-Бельск', online: true },
    { name: 'Яндекс Петренко', city: 'Пермь', online: true },
    { name: 'Успех Возможностей', city: 'Радонеж', online: true },
    { name: 'Инна Нашлась', city: 'Омск', online: true },
    { name: 'Алла Подольская', city: 'Петропавловск-Камчатский', online: true },
  ],
};

export default Friends;
