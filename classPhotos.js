// O(nlog(n)) Time and O(1) Space Complexity
const classPhotos = (redShirtHeights, blueShirtHeights) => {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  let backRow;
  let frontRow;
  if (redShirtHeights[0] > blueShirtHeights[0]) {
    backRow = redShirtHeights;
    frontRow = blueShirtHeights;
  } else if (redShirtHeights[0] < blueShirtHeights[0]) {
    backRow = blueShirtHeights;
    frontRow = redShirtHeights;
  } else {
    return false;
  }

  for (let h = 0; h < redShirtHeights.length; h++) {
    if (backRow[h] <= frontRow[h]) {
      return false;
    }
  }
  return true;
};
