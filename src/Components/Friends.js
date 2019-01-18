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
  <div className="content-wrap">
    <section className="friends-tab">
      <div className="left">
        {friendsList.map((friend, index) => !(index % 2) && (
          <FriendCard {...friend} index={index} key={friend.name} />
        ))}
      </div>
      <div className="right">
        {friendsList.map((friend, index) => !!(index % 2) && (
          <FriendCard {...friend} index={index} key={friend.name} />
        ))}
      </div>
    </section>
  </div>
);

export default Friends;
