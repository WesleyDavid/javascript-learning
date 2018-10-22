console.log("'this' keyword in the Global Execution Context: " + this);

function firstTier() {
 console.log("'this' keyword in the first tier of lexical scope: " + this);
 function secondTier() {
  console.log("'this' keyword in the second tier of lexical scope: " + this);
 } // End secondTier()
 secondTier();
} // End firstTier()

// firstTier();
window.firstTier();

var firstTierFuncExp = function() {
 console.log("The 'this' keyword within a first tier function expresion: " + this);
}

firstTierFuncExp();

simpleObject = {
 simpleMethod: function() {
  console.log("The 'this' keyword within a first tier method: " + this);
  function simpleInnerFuncDecl() {
   console.log("The 'this' keyword within an inner function declaration: " + this);
  }

  var simpleInnerFuncExp = function() {
   console.log("The 'this' keyword within an inner function expression: " + this);
  }

  simpleInnerFuncDecl();
  simpleInnerFuncExp();
 }, // End simpleMethod
 innerObject: {
  innerMethod: function() {
   console.log("The 'this' keyword within an inner object and method: " + this);
  } // End innerMethod()
 } // End innerObject
}

simpleObject.simpleMethod();
simpleObject.innerObject.innerMethod();
