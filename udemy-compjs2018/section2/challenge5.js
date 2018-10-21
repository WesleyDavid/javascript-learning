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

console.log(familyFood);
familyFood.calcTips();
console.log(familyFood);
