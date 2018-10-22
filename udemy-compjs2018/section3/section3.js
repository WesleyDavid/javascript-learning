console.log("'this' Keyword in the Global Execution Context: " + this);

function firstTier() {
 console.log("'this' Keyword in the first tier of lexical scope: " + this);
 function secondTier() {
  console.log("'this' Keyword in the second tier of lexical scope: " + this);
 } // End secondTier()
 secondTier();
} // End firstTier()

firstTier();
