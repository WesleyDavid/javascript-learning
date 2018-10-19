var johnsTeamScores = [89,120,103];
var mikesTeamScores = [116,94,123];

var johnsTeamScoresAvg = calculateAvgScores(johnsTeamScores);
var mikesTeamScoresAvg = calculateAvgScores(mikesTeamScores);

if (johnsTeamScoresAvg < mikesTeamScoresAvg) {
 console.log("Mike's team scores more with an average of " + mikesTeamScoresAvg);
} else if ( johnsTeamScoresAvg === mikesTeamScoresAvg ) {
 console.log("John and Mike's teams score an identical amount of points on avereage at " + johnsTeamScoresAvg);
} else {
 console.log("John's team scores more with an average of " + johnsTeamScoresAvg);
}


function calculateAvgScores( scores ) {
 var totalPoints = 0;
 for (x in scores) {
  totalPoints += scores[x];
 }
 return totalPoints / scores.length;
}
