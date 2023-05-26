// O(n^2) Time and O(1) Space Complexity
const bubbleSort = (array) => {
  let sorted = false;
  while (!sorted) {
    let swapOccurred = false;
    let numPasses = 0;
    for (let i = 0; i < array.length - numPasses; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapOccurred = true;
      }
    }
    numPasses++;
    if (!swapOccurred) {
      sorted = true;
    }
  }
  return array;
};
