import isNumber from 'is-number';

const trimPartiallyFilledMask = (partiallyFilledMask) => {
  const lastNumberIndex = Array.from(partiallyFilledMask)
    .reverse()
    .findIndex(sign => isNumber(sign));
  const trimmedMask = partiallyFilledMask.slice(0, partiallyFilledMask.length - lastNumberIndex);
  return trimmedMask;
};

const defaultMask = '+_-(___)-___-__-__';

const formatTel = (telString, mask = defaultMask) => {
  const telArray = Array.from(telString).filter(sign => isNumber(sign));
  const partiallyFilledMask = telArray.reduce((acc, digit) => acc.replace('_', digit), mask);
  const trimmedMask = trimPartiallyFilledMask(partiallyFilledMask);
  return trimmedMask;
};

export default formatTel;
