import React from 'react';
import FriendCard from './FriendCard';

const friendsList = [
  { name: 'Лев Бронштейн', city: 'Ханты-Мансийск', online: true },
  { name: 'Находка Капитал', city: 'Усть-Бельск', online: true },
  { name: 'Яндекс Петренко', city: 'Пермь', online: true },
  { name: 'Успех Возможностей', city: 'Радонеж', online: true },
  { name: 'Инна Нашлась', city: 'Омск', online: true },
  { name: 'Алла Подольская', city: 'Петропавловск-Камчатский', online: true },
];

const Friends = () => (
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

export default Friends;
