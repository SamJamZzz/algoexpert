// O(nlog(n)) Time and O(1) Space Complexity
const minimumWaitingTime = (queries) => {
  queries.sort((a, b) => a - b);
  let totalWaitingTime = 0;
  for (let i = 0; i < queries.length; i++) {
    totalWaitingTime += queries[i] * (queries.length - i - 1);
  }
  return totalWaitingTime;
};
