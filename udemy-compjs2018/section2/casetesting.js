var age = 16;


switch (true) {
 case age < 16:
  console.log("You cannot drive.");
  break;
 case age < 25:
  console.log("You can drive, but you can't rent a car.");
  break;
 default:
  console.log("You can drive!");
}

switch (age) {
 case age < 16:
  console.log("You cannot drive.");
  break;
 case age < 25:
  console.log("You can drive, but you can't rent a car.");
  break;
 default:
  console.log("You can drive, and even rent the car to travel in!");
}
