// O(nlog(n)) Time and O(n) Space Complexity
// const sortedSquareArray = (array) => {
//   let result = array.map((num) => num ** 2);
//   return result.sort((a, b) => a - b);
// };

// O(n) Time and O(n) Space Complexity
const sortedSquareArray = (array) => {
  let result = Array(array.length).fill(0);
  let left = 0;
  let right = array.length - 1;
  let insert = right;
  while (left <= right) {
    if (array[left] ** 2 <= array[right] ** 2) {
      result[insert] = array[right] ** 2;
      right--;
      insert--;
      continue;
    }
    result[insert] = array[left] ** 2;
    left++;
    insert--;
  }
  return result;
};
