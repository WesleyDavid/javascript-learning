var johnsTeamScores = [89,120,124];
var mikesTeamScores = [116,94,123];
var marysTeamScores = [97,134,105];

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
 case marysTeamScores > mikesTeamScoresAvg && marysTeamScores > johnsTeamScoresAvg:
  console.log("Mary's team has the highest average score per game of " + marysTeamScoresAvg);
 break;
 default:
  console.log("All three players' have an identical average score per game of " + marysTeamScoresAvg);
}

function calculateAvgScores( scores ) {
 var totalPoints = 0;
 for (x in scores) {
  totalPoints += scores[x];
 }
 return totalPoints / scores.length;
}
