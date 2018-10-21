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
  } // End for loop
 } // End calcTips method
} // End familyFood object

var marksFamily = {
 bills: [77, 375, 110, 45],
 tipAmounts: [],
 billsPlusTips: [],
 calcTips: function() {
  for (x in this.bills) {
   if (this.bills[x] < 100) {
    this.tipAmounts.push(this.bills[x] * 0.2);
   } else if (this.bills[x] === 100 && this.bills[x] < 300) {
    this.tipAmounts.push(this.bills[x] * 0.1);
   } else {
    this.tipAmounts.push(this.bills[x] * 0.25);
   }
   this.billsPlusTips.push(this.bills[x] + this.tipAmounts[x]);
  } // End for loop
 } // End calcTips()
} // End marksFamily

function calcTipAverage( tips ) {
var totalAmount=0;
 for (x in tips) {
  totalAmount += tips[x];
 }
 return totalAmount / tips.length;
}


familyFood.calcTips();
marksFamily.calcTips();

console.log("John's family tipped an average of $" + calcTipAverage( familyFood.tipAmounts ) );
console.log("Mark's family tipped an average of $" + calcTipAverage( marksFamily.tipAmounts ) );

if (calcTipAverage( familyFood.tipAmounts ) > calcTipAverage( marksFamily.tipAmounts ) ) {
 console.log("John's family tips more than Mark's family.");
} else if (calcTipAverage( marksFamily.tipAmounts ) > calcTipAverage( familyFood.tipAmounts )) {
 console.log("Mark's family tips more than John's family.");
} else {
 console.log("John and Mark's family tip the exact same amount on average.");
}
