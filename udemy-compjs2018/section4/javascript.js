var rolls = [0,0,0,0,0,0];
var numRolls = 100;

for (var i = 0; i < numRolls; i++) {
 rolls[Math.floor((Math.random() * 6))]++;
}

document.write("After " + numRolls + " rolls of a single six sided die, here are the numbers that were rolled:<br/>");
for (r in rolls) {
 document.write(((parseInt(r))+1)+ ": " + rolls[r] + " times.<br/>");
}
