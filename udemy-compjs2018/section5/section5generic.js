// Section 5 generic JS tweaking


/* Playing with what 'this' is in different contexts.

console.log("'this' in the context of the main body of the javascript file: " + this);

function thisTest() {
 console.log("'this' in the context of a function defined and run within the main javascript file: " + this);
}; thisTest();

var thisFunctExpTest = function() {
 console.log("'this' in the context of a function expression: " + this);
 this.whatIsThis = function () { return console.log("'this in the context of a property within the function: " + this); }
};
// thisFunctExpTest(); // [object Window]

var thisFunctVarTest = new thisFunctExpTest(); // Runs the first console.log as [object Object]
thisFunctVarTest.whatIsThis(); // Runs second console.log as [object Object]
*/

// Object and prototype test

var Desk = function(seats, deskLocation) {
 this.seats = seats;
 this.deskLocation = deskLocation;
 this.reserved = false;
} // End Desk object

Desk.prototype.reserve = function() {
 this.reserved = true;
 console.log("This desk has been reserved.");
} // End reserve desk prototype method

Desk.prototype.release = function() {
 this.reserved = false;
 console.log("This desk is no longer reserved.");
}

var desk1, desk2, desk3;

desk1 = new Desk(8, "southeast porch");
desk2 = new Desk(10, "southeast porch");
desk3 = new Desk(12, "southeast porch");
