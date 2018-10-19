var markHeight, markWeight, markBMI, johnHeight, johnWeight, johnBMI;
markHeight = 1.81;
markWeight = 74;
johnHeight = 1.76;
johnWeight = 81;

markBMI = markWeight / (markHeight * 2);
johnBMI = johnWeight / (johnHeight * 2);

var markMassHigherThanJohn = markBMI > johnBMI;

console.log("Mark's BMI is: " + markBMI);
console.log("John's BMI is: " + johnBMI);
console.log("Is Mark's BMI higher than Johns? " + markMassHigherThanJohn);
