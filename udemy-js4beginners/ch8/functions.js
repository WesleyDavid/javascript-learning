/*
 Some fun things to try:
  - Show the index of each occurance of a given character.
*/

function wreckMyArray( theArray )
{
 //I get it, this function is pointless. Leave me alone. :P
 return theArray.replace(/[aeiou]/ig,"X");
} // End wreckMyArray


function wreckMyArray2 ( theArray )
{
 //And now to do it iteratively because why not

 var wreckedArray = []

 for (x in theArray) {
  theChar = theArray[x];

  if ( theChar === "a" ||
       theChar === "A" ||
       theChar === "e" ||
       theChar === "E" ||
       theChar === "i" ||
       theChar === "I" ||
       theChar === "o" ||
       theChar === "O" ||
       theChar === "u" ||
       theChar === "U" )
  {
   theChar = "X"
  }
  wreckedArray.push(theChar)
 }

 return wreckedArray.join("");
}

function onlyHaveIsForYou ( iAnalysis )
{
  var i = 1

  document.write("<br/>");
  for (x in iAnalysis) 
  {
   if ( iAnalysis.charAt(x) === "i" )
   {
    document.write("i number " + i + " is located at position " + x + "<br/>");
    i++;
   }
  }

 document.write("There are " + i + " total i's in the string.<br/><br/>");
} // End iAnalysis()
