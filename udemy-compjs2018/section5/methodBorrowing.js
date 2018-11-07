// Make one object with a method
var dice = {
 name: "varDice",
 currentRoll: 0,
 lastRoll: 0,
 roll: function () {
  console.log("You just rolled! Also, you are: " + this.name);

 }
};
dice.roll();


// Make another object without
var sadDice = { // Sad dice cannot roll =(
 name: "sadDice",
 currentRoll: 0,
 lastRoll: 0
}


// borrow with =
sadDice.roll = dice.roll;
console.log(sadDice.roll()); // The dice are now happy!


// Then achieve the same functionality with .call
dice.roll.call(sadDice);
