// O(log(n)) Time and O(log(n)) Space Complexity
// const binarySearch = (array, target) => {
//   return binarySearchHelper(array, target, 0, array.length - 1);
// };

// const binarySearchHelper = (array, target, left, right) => {
//   if (left > right) {
//     return -1;
//   }
//   let mid = Math.floor((left + right) / 2);
//   let potentialMatch = array[mid];
//   if (potentialMatch === target) {
//     return mid;
//   } else if (potentialMatch < target) {
//     return binarySearchHelper(array, target, mid + 1, right);
//   } else {
//     return binarySearchHelper(array, target, left, mid - 1);
//   }
// };

// O(log(n)) Time and O(1) Space Complexity
const binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let potentialMatch = array[mid];
    if (potentialMatch === target) {
      return mid;
    } else if (potentialMatch < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
