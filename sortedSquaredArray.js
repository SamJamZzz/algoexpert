const sortedSquareArray = (array) => {
  let result = array.map((num) => num ** 2);
  return result.sort((a, b) => a - b);
};
