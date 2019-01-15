import isNumber from 'is-number';

const trimPartiallyFilledMask = (partiallyFilledMask) => {
  const lastNumberIndex = Array.from(partiallyFilledMask)
    .reverse()
    .findIndex(sign => isNumber(sign));
  const trimmedMask = partiallyFilledMask.slice(0, partiallyFilledMask.length - lastNumberIndex);
  return trimmedMask;
};

const defaultMask = '+_-(___)-___-__-__';

const getArrayOfDigitsFromString = string => Array.from(string).filter(sign => isNumber(sign));

const formatFromArrayOfDigits = (arrayOfDigits, mask = defaultMask) => {
  if (!(arrayOfDigits instanceof Array)) return '+';
  if (!arrayOfDigits.length) return '+';
  const partiallyFilledMask = arrayOfDigits.reduce((acc, digit) => acc.replace('_', digit), mask);
  const trimmedMask = trimPartiallyFilledMask(partiallyFilledMask);
  return trimmedMask;
};

export const formatFromString = (telString = '', mask) => {
  const arrayOfDigits = getArrayOfDigitsFromString(telString);
  return formatFromArrayOfDigits(arrayOfDigits, mask);
};

export const getStringOfDigits = string => getArrayOfDigitsFromString(string).slice(0, 11).join('');

export const getNewSelectionStart = (oldSelectionStart, currentSelectionStart, formattedTel) => {
  const shift = currentSelectionStart - oldSelectionStart;
  let newSelectionStart;
  if (shift > 0) {
    newSelectionStart = Array.from(formattedTel)
      .findIndex((_sign, index) => isNumber(formattedTel[index - 1])
        && (index >= currentSelectionStart));
  } else if (shift === 0) {
    newSelectionStart = currentSelectionStart;
  } else {
    const indexFromRight = Array.from(formattedTel)
      .reverse()
      .findIndex((_sign, index, array) => isNumber(array[index])
        && (index >= array.length - currentSelectionStart));
    const index = formattedTel.length - indexFromRight;
    newSelectionStart = index;
  }
  return newSelectionStart;
};
