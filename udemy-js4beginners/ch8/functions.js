/*
 Some fun things to try:
  - Show the index of each occurance of a given character.
*/

function wreckMyArray( theArray )
{
 var theChar

 for (x in theArray)
 {
  theChar = theArray.charAt(x);
  if ( theChar === "a" || 
       theChar === "A" ||
       theChar === "e" ||
       theChar === "E" ||
       theChar === "i" ||
       theChar === "I" ||
       theChar === "o" ||
       theChar === "O" ||
       theChar === "u" ||
       theChar === "U") 
  {
   theArray[x] = "X";
  }

 } // End for in loop

 return theArray;
} // End wreckMyArray
