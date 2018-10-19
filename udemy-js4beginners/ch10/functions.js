// Chapter 10 functions

function firstName() {
 var first = document.getElementById('firstName').value;

 if (first === null || first === "")
 {
  document.getElementById('firstError').innerHTML = "<-- First name can't be empty";
  document.getElementById('firstName').style['background-color'] = "red";
 } else {
  document.getElementById('firstError').innerHTML = null;
  document.getElementById('firstName').removeAttribute("style");
 }
} // End firstName()


function lastName() {
 var last = document.getElementById('lastName').value;

 if (last === null || last === "")
 {
  document.getElementById('lastNameError').innerHTML = "<-- Last name can't be empty";
  document.getElementById('lastName').style['background-color'] = "red";
 } else if ( last.length <= 2 ) {
  document.getElementById('lastNameError').innerHTML = "<-- Last name must be more than 2 characters."
  document.getElementById('lastName').style['background-color'] = "red";
 } else {
  document.getElementById('lastNameError').innerHTML = null;
  document.getElementById('lastName').removeAttribute("style");
 }
} // End lastName


function email() {
 var email  = document.getElementById('email').value;

 if (email === null || email === "")
 {
  document.getElementById('emailError').innerHTML = "<-- Email address can't be empty";
  document.getElementById('email').style['background-color'] = "red";
 } else if (email.length <= 2 ) {
  document.getElementById('emailError').innerHTML = "<-- Email address must be more than 2 characters."
  document.getElementById('email').style['background-color'] = "red";
 } else {
  document.getElementById('emailError').innerHTML = null;
  document.getElementById('email').removeAttribute("style");
 }
} // End email


function phone() {
 var phone = document.getElementById('phone').value;

 if (phone === null || phone === "")
 {
  document.getElementById('phoneError').innerHTML = "<-- Phone number can't be empty";
  document.getElementById('phone').style['background-color'] = "red";
 } else if ( phone.length <= 2 ) {
  document.getElementById('phoneError').innerHTML = "<-- Phone number must be more than 2 characters."
  document.getElementById('phone').style['background-color'] = "red";
 } else {
  document.getElementById('phoneError').innerHTML = null;
  document.getElementById('phone').removeAttribute("style");
 }
} // End phone
