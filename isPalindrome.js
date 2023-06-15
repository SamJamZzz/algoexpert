// O(n) Time and O(n) Space Complexity
// const isPalindrome = (string) => {
//   let n = string.length;
//   if (n <= 1) {
//     return true;
//   }
//   if (n === 2) {
//     return string[0] === string[1];
//   }
//   if (string[0] === string.slice(-1)) {
//     return isPalindrome(string.slice(1, -1));
//   }
//   return false;
// };

// O(n) Time and O(1) Space Complexity
const isPalindrome = (string) => {
  let left = 0;
  let right = string.length - 1;
  while (left <= right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
