import generatePersonName from './generatePersonName';
import generateRandomCity from './generateRandomCity';

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
  return friends;
};

export default generateFriends;
