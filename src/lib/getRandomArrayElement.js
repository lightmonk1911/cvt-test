const randomArrayElement = (arr, withIndex = false) => {
  const index = Math.floor(Math.random() * arr.length);
  if (!withIndex) return arr[index];
  return [arr[index], index];
};

export default randomArrayElement;
