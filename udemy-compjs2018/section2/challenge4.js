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
 console.log("John has a higher BMI than Mark.");
} else if (john.BMI < mark.BMI) {
 console.log("Mark has a higher BMI than John.");
} else {
 console.log("John and Mark have identical BMIs.");
}
