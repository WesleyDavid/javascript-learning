var johnsTeamScores = [89,120,124];
var mikesTeamScores = [89,120,124];
var marysTeamScores = [89,120,124];

var johnsTeamScoresAvg = calculateAvgScores(johnsTeamScores);
var mikesTeamScoresAvg = calculateAvgScores(mikesTeamScores);
var marysTeamScoresAvg = calculateAvgScores(marysTeamScores);

switch (true) {
 case johnsTeamScoresAvg > mikesTeamScoresAvg && johnsTeamScoresAvg > marysTeamScoresAvg:
  console.log("John's team has the highest average score per game of " + johnsTeamScoresAvg);
  break;
 case mikesTeamScoresAvg > marysTeamScoresAvg && mikesTeamScoresAvg > johnsTeamScoresAvg:
  console.log("Mike's team has the highest average score per game of " + mikesTeamScoresAvg);
  break;
 case marysTeamScoresAvg > mikesTeamScoresAvg && marysTeamScoresAvg > johnsTeamScoresAvg:
  console.log("Mary's team has the highest average score per game of " + marysTeamScoresAvg);
  break;
 case johnsTeamScoresAvg === mikesTeamScoresAvg && johnsTeamScoresAvg !== marysTeamScoresAvg:
  console.log("John and Mike's teams have tied for highest scoring average at " + mikesTeamScoresAvg);
  break
 case johnsTeamScoresAvg === marysTeamScoresAvg && johnsTeamScoresAvg !== mikesTeamScoresAvg:
  console.log("John and Mary's teams have tied for highest scoring average at " + marysTeamScoresAvg);
  break;
 case marysTeamScoresAvg === mikesTeamScoresAvg && marysTeamScoresAvg !== johnsTeamScoresAvg:
  console.log("Mary and Mike's teams have tied for highest scoring average at " + marysTeamScoresAvg);
  break;
 case marysTeamScoresAvg === mikesTeamScoresAvg && marysTeamScoresAvg === johnsTeamScoresAvg:
  console.log("All three players' have an identical average score per game of " + marysTeamScoresAvg);
  break;
 default:
  console.log("Something very unusual has happened. Check your code.");
}

function calculateAvgScores( scores ) {
 var totalPoints = 0;
 for (x in scores) {
  totalPoints += scores[x];
 }
 return totalPoints / scores.length;
}
