var john = {
 fullName: "John Smith",
 mass: 72,
 height: 1.72,
 calcBMI: function() {
 this.BMI = this.mass / (this.height * 2);
 return this.BMI;
 }
}

var mark = new Object();
mark.fullName = "Mark Richards";
mark.mass = 72;
mark.height = 1.72;
mark.calcBMI = function() {
 this.BMI = this.mass / (this.height *2);
 return this.BMI;
}

console.log(john);
console.log(mark);
john.calcBMI();
console.log(john);
mark.calcBMI();
console.log(mark);

if (john.BMI > mark.BMI) {
 console.log(john.fullName + "has a higher BMI than " + mark.fullName);
} else if (john.BMI < mark.BMI) {
 console.log(mark.fullName + " has a higher BMI than John " + john.fullName);
} else {
 console.log(john.fullName + "and " + mark.fullName + "  have identical BMIs.");
}
