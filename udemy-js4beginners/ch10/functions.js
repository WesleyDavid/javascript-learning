// Chapter 10 functions

function firstName() {
 var first = document.getElementById('firstName').value;

 if (first === null || first === "")
 {
  document.getElementById('firstError').innerHTML = "<-- First name can't be empty";
  document.getElementById('firstName').style.color = "red";
 } else {
  document.getElementById('firstError').innerHTML = null;
  document.getElementById('firstName').removeAttribute("style");
 }
} // End firstName()


function lastName() {

} // End lastName


function email() {

} // End email


function phone() {

} // End phone
