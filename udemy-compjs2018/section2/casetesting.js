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

// I get why this doesn't work now
switch (age) { // age is an integer. For example, 16.
 case age < 16: //This expression evaluates to the boolean false, because age is equal to 16. False is compared to 16 which is false, because they don't match.
  console.log("You cannot drive.");
  break;
 case age < 25: // This expresion evaluates to True because age is less than 25. The boolean 'true' is compared to the integer 16 which is false.
  console.log("You can drive, but you can't rent a car.");
  break;
 default: //Nothing else matched, so this is run:
  console.log("You can drive, and even rent the car to travel in!");
}
