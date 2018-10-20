function calculateTips ( bills ) {
 var allTips = [];

 for (var x = 0; x < bills.length; x++) {
  if (bills[x] < 50) {
   allTips.push(0.2);
  } else if (bills[x] >= 50 && bills[x] < 200) {
   allTips.push(0.15);
  } else {
   allTips.push(0.1)
  }
 } //end for

 return allTips;
} // End calculateTips()


function calculateTotalBills ( bills, tips ) {
 var totalBills = [];

 for (x in bills) {
  totalBills.push( bills[x] + (bills[x] * tips[x] ));
 } // End for

 return totalBills;
}

var allBills = [124, 48, 268];
var allTips = calculateTips(allBills);
var totalBills = calculateTotalBills( allBills, allTips );

// Express the bare bills, the tip percentage, the tip amount, and the total bills.

console.log(allBills, allTips, totalBills);

for (x in totalBills) {
 console.log("Meal #" + (x+1) + " cost $" + allBills[x] + " and incurred a tip percentage of %" + allTips[x] + ". The total bill was then " + totalBills[x] + ".");
}
