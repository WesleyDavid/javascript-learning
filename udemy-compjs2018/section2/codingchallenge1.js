var markHeight, markWeight, markBMI, johnHeight, johnWeight, johnBMI;
markHeight = 1.81;
markWeight = 81;
johnHeight = 1.76;
johnWeight = 90;

markBMI = markWeight / (markHeight * 2);
johnBMI = johnWeight / (johnHeight * 2);

var markMassHigherThanJohn = markBMI > johnBMI;

console.log("Mark's BMI is: " + markBMI);
console.log("John's BMI is: " + johnBMI);
if ( markMassHigherThanJohn ) {
    console.log("Mark's mass is higher than John's");
} else {
    console.log("John's mass is higher than Mark's");
}
