// O(nlog(n)) Time and O(1) Space Complexity
const nonConstructibleChange = (coins) => {
  sortedCoins = [...coins].sort((a, b) => a - b);
  if (!sortedCoins.length || sortedCoins[0] !== 1) {
    return 1;
  }
  let change = 0;
  for (let coin of sortedCoins) {
    if (change + 1 < coin) {
      return change + 1;
    }
    change += coin;
  }
  return change + 1;
};
