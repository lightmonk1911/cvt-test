import lastnames from './russianLastnames';
import firstnames from './russianFirstnames';
import getRandomArrayElement from './getRandomArrayElement';

const generateName = () => {
  const gender = Math.random() > 0.5 ? 'male' : 'female';
  const firstname = getRandomArrayElement(firstnames[gender]);
  const lastname = getRandomArrayElement(lastnames[gender]);
  return `${firstname} ${lastname}`;
};

export default generateName;
