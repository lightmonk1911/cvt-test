import React from 'react';
import generatePersonName from '../lib/generatePersonName';
import generateRandomCity from '../lib/generateRandomCity';
import FriendCard from './FriendCard';

const generateFriends = (count) => {
  const friends = [];
  for (let i = 0; i < count; i += 1) {
    const person = {
      name: generatePersonName(),
      online: Math.random() > 0.5,
      city: generateRandomCity(),
    };
    friends.push(person);
  }
  console.log('friends', friends);
  return friends;
};

const friendsList = generateFriends(15);

const Friends = () => (
  <section className="main">
    <div className="friends">
      {friendsList.map((friend) => {
        return (
          <FriendCard {...friend} />
        );
      })}
    </div>
  </section>
);

export default Friends;
