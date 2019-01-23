import generatePersonName from './generatePersonName';
import generateRandomCity from './generateRandomCity';
import getRandomArrayElement from './getRandomArrayElement';
import pathsToAvatars from './pathsToAvatars';

const generateFriends = (count) => {
  const friends = [];
  let paths = pathsToAvatars.slice();
  for (let i = 0; i < count; i += 1) {
    const [path, indexOfUsedPath] = getRandomArrayElement(paths, 'withIndex');
    paths = paths.filter((element, index) => index !== indexOfUsedPath);
    const person = {
      name: generatePersonName(),
      online: Math.random() > 0.5,
      city: generateRandomCity(),
      pathToAvatar: path,
    };
    friends.push(person);
  }
  return friends;
};

export default generateFriends;
