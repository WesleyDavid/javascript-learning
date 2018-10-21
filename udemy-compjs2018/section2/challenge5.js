var familyFood = {
 bills: [124, 48, 268, 180, 42],
 tipAmounts: [],
 billsPlusTips: [],
 calcTips: function() {
  for (x in this.bills) {
   if (this.bills[x] < 50) {
    this.tipAmounts.push(this.bills[x] * 0.2);
   } else if (this.bills[x] === 50 && this.bills[x] < 200) {
    this.tipAmounts.push(this.bills[x] * 0.15);
   } else {
    this.tipAmounts.push(this.bills[x] * 0.1);
   }
   this.billsPlusTips.push(this.bills[x] + this.tipAmounts[x]);
  } //End for loop
 } // End calcTips method
} // End familyFood object

var marksFamily = {
 bills: [77, 375, 110, 45]
} // End marksFamily

function calcTipAverage( tips ) {
var totalAmount;

 for (x in tips) {
  totalAmount += tips[x];
 }

 return totalAmount / tips.length;
}


console.log(familyFood);
familyFood.calcTips();
console.log(familyFood);

console.log("John's family tipped an average of $" + calcTipAverage( familyFood.bills ) );
console.log("Mark's family tipped an average of $" + calcTipAverage( marksFamily.bills ) );

if (calcTipAverage( familyFood.bills ) > calcTipAverage( marksFamily.bills ) ) {
 console.log("John's family tips more than Mark's family.");
} else if (calcTipAverage( marksFamily.bills ) > calcTipAverage( familyFood.bills )) {
 console.log("Mark's family tips more than John's family.");
} else {
 console.log("John and Mark's family tip the exact same amount on average.");
}
