// O(2^n) Time and O(n) Space Complexity
const getNthFib = (n) => {
  if (n <= 2) {
    return n - 1;
  }
  return getNthFib(n - 1) + getNthFib(n - 2);
};
