var rolls = [0,0,0,0,0,0];
var numRolls = 500;

for (var i = 0; i < numRolls; i++) {
 rolls[Math.floor((Math.random() * 6))]++;
}

document.write("After " + numRolls + " rolls of a single six sided die, here are the numbers that were rolled:<br/>");
for (r in rolls) {
 document.write(((parseInt(r))+1)+ ": " + rolls[r] + " times.<br/>");
}

document.write("<br/>Let's visualize this: <br/>");
for (r in rolls) {
 document.write(((parseInt(r))+1) + ":  ");
 for (var x = 0; x < rolls[r]; x++) {
  document.write("x");
 }
 document.write("<br/>");
}

document.write("<br/>Let's add a second dice! <br/>")
var twoRolls = [0,0,0,0,0,0,0,0,0,0,0];

for (var i = 0; i < numRolls; i++) {
 var thisRoll = (Math.floor((Math.random() * 6))) + (Math.floor((Math.random() * 6)));
 twoRolls[thisRoll]++;
}

document.write("After " + numRolls + " rolls of two six-sided die, here are the numbers that were rolled:<br/>");
for (r in twoRolls) {
 document.write((parseInt(r)+2) + ": " + twoRolls[r] + " times.<br/>");
}

/*
var twoDice = new Array(2);
for (i = 0; i < 2; i++) {
 twoDice[i] = new Array(6);
};

for (var i = 0; i < numRolls; i++) {
 twoDice[0][Math.floor((Math.random() * 6))]++;
 twoDice[1][Math.floor((Math.random() * 6))]++;
}

document.write("After " + numRolls + " rolls of two six-sided die, here are the numbers that were rolled:<br/>");

for (r in twoDice){
 for (rr in twoDice[r]) {
  
 }
}
*/
