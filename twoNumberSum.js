// O(n^2) Time and O(1) Space Complexity
// const twoNumberSum = (array, targetSum) => {
//   let length = array.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = i + 1; j < length; j++) {
//       if (array[i] + array[j] === targetSum) {
//         return [array[i], array[j]];
//       }
//     }
//   }
//   return [];
// };

// O(nlog(n)) Time and O(1) Space Complexity
// const twoNumberSum = (array, targetSum) => {
//   let sortedArray = [...array].sort((a, b) => a - b);
//   let left = 0;
//   let right = array.length - 1;

//   while (left !== right) {
//     let sum = sortedArray[left] + sortedArray[right];
//     if (sum < targetSum) {
//       left++;
//       continue;
//     }
//     if (sum > targetSum) {
//       right--;
//       continue;
//     }
//     return [sortedArray[left], sortedArray[right]];
//   }
//   return [];
// };

// O(n) Time and O(n) Space Complexity
const twoNumberSum = (array, targetSum) => {
  let complements = new Set();
  for (let number of array) {
    if (complements.has(number)) {
      return [number, targetSum - number];
    }
    complements.add(targetSum - number);
  }
  return [];
};
