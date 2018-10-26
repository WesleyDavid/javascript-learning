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


