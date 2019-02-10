/*
 * Not sure what the functional difference is between the two ways below of making a new object from a function.
*/

function NewPerson( name, birthyear ) {
    this.name = name;
    this.birthyear = birthyear;
};

let NewPersonTwo = function( name, birthyear ) {
    this.name = name;
    this.birthyear = birthyear;
}

var robert = new NewPerson("Steve", 1985);
console.log(robert);

var robertTwo = new NewPersonTwo("Stephen", 1984);
console.log(robertTwo);