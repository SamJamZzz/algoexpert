// O(n) Time and O(k) Space Complexity
// where n is the number of competitions and k is the number of teams
const tournamentWinner = (competitions, results) => {
  const pointsObj = { "": 0 };
  let winner = "";

  for (let i = 0; i < competitions.length; i++) {
    let home = competitions[i][0];
    let away = competitions[i][1];

    if (results[i]) {
      if (!pointsObj[home]) {
        pointsObj[home] = 0;
      }
      pointsObj[home] += 1;
      if (pointsObj[winner] < pointsObj[home]) {
        winner = home;
      }
    } else {
      if (!pointsObj[away]) {
        pointsObj[away] = 0;
      }
      pointsObj[away] += 1;
      if (pointsObj[winner] < pointsObj[away]) {
        winner = away;
      }
    }
  }

  return winner;
};
