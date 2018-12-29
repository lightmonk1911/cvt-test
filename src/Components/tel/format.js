import isNumber from 'is-number';

const formatTel = (telString) => {
  const telArray = Array.from(telString).filter(sign => isNumber(sign));
  if (telArray.length === 0) return '+';
  const countryCode = telArray[0];
  if (telArray.length === 1) return `+${countryCode}`;
  const operatorCode = telArray.slice(1, 4).join('');
  if (telArray.length < 5) return `+${countryCode}-${operatorCode}`;
  const part1 = telArray.slice(4, 7).join('');
  if (telArray.length < 8) return `+${countryCode}-${operatorCode}-${part1}`;
  const part2 = telArray.slice(7, 9).join('');
  if (telArray.length < 10) return `+${countryCode}-${operatorCode}-${part1}-${part2}`;
  const part3 = telArray.slice(9, 11).join('');
  const formatted = `+${countryCode}-${operatorCode}-${part1}-${part2}-${part3}`;
  return formatted;
};

export default formatTel;
