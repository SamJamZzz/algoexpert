// O(n) Time and O(1) Space Complexity
// where n is the size of the array
const isValidSubsequence = (array, sequence) => {
  let arrInd = 0;
  let seqInd = 0;
  while (sequence[seqInd]) {
    if (!array[arrInd]) {
      return false;
    }
    if (array[arrInd] === sequence[seqInd]) {
      seqInd++;
    }
    arrInd++;
  }
  return true;
};
