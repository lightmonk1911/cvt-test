import generatePersonName from './generatePersonName';
import generateRandomCity from './generateRandomCity';
import getRandomArrayElement from './getRandomArrayElement';
import pathsToAvatars from './pathsToAvatars';
import prefetch from './prefetch';

const generateFriends = (count) => {
  const finalCount = count > 36 ? 36 : count;
  const friends = [];
  let paths = pathsToAvatars.slice();
  for (let i = 0; i < finalCount; i += 1) {
    const [pathToAvatar, indexOfUsedPath] = getRandomArrayElement(paths, 'withIndex');
    paths = paths.filter((element, index) => index !== indexOfUsedPath);
    const person = {
      name: generatePersonName(),
      online: Math.random() > 0.5,
      city: generateRandomCity(),
      pathToAvatar,
    };
    friends.push(person);
    prefetch(pathToAvatar);
  }
  return friends;
};

export default generateFriends;
