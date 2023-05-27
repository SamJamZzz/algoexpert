// O(n^2) Time and O(1) Space Complexity
const insertionSort = (array) => {
  let result = [...array];
  for (let i = 1; i < result.length; i++) {
    let key = result[i];
    let j = i - 1;
    while (j >= 0 && key < result[j]) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = key;
  }
  return result;
};
