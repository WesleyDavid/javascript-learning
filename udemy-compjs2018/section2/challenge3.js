function calculateTipPercentages ( bills ) {
 var allTipPercentages = [];

 for (var x = 0; x < bills.length; x++) {
  if (bills[x] < 50) {
   allTipPercentages.push(0.2);
  } else if (bills[x] >= 50 && bills[x] < 200) {
   allTipPercentages.push(0.15);
  } else {
   allTipPercentages.push(0.1)
  }
 } //end for

 return allTipPercentages;
} // End calculateTipPercentages()


function calculateTipAmounts( bills, tips ) {
 var tipAmounts = [];

 for (x in bills) {
  tipAmounts.push(bills[x] * tips[x]);
 }

 return tipAmounts;
} // End calculateTipAmounts()


function calculateTotalBills ( bills, tips ) {
 var totalBills = [];

 for (x in bills) {
  totalBills.push( bills[x] + (bills[x] * tips[x] ));
 } // End for

 return totalBills;
} // End calculateTotalBills()

var allBills = [124, 48, 268];
var allTipPercentages = calculateTipPercentages(allBills);
var allTips = calculateTipAmounts(allBills, allTipPercentages);
var totalBills = calculateTotalBills( allBills, allTipPercentages );

// Express the bare bills, the tip percentage, the tip amount, and the total bills.

console.log(allBills, allTipPercentages, allTips, totalBills);

var i = 1;

for (x in totalBills) {
 console.log("Meal #" + i + " cost $" + allBills[x] + " and incurred a tip percentage of " + (allTipPercentages[x]*100) + "%. The total tip came to $" + allTips[x] + " and the total bill was then " + totalBills[x] + ".");
 i++;
}
