var john = {
 fullName: "John Smith",
 mass: 72,
 height: 1.72,
 calcBMI: function() {
 this.BMI = this.mass / (this.height * 2);
 }
}

var mark = new Object();
mark.fullName = "Mark Richards";
mark.mass = 68;
mark.height = 1.68;

console.log(john);
console.log(mark);
john.calcBMI();
console.log(john);
