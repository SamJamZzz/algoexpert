// O(nlog(n)) Time and O(1) Space Complexity
const tandemBicycle = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
  redShirtSpeeds.sort((a, b) => a - b);
  if (fastest) {
    blueShirtSpeeds.sort((a, b) => b - a);
  } else {
    blueShirtSpeeds.sort((a, b) => a - b);
  }

  let totalSpeed = 0;
  for (let s = 0; s < redShirtSpeeds.length; s++) {
    totalSpeed += Math.max(redShirtSpeeds[s], blueShirtSpeeds[s]);
  }

  return totalSpeed;
};
